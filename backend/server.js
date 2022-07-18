const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "hotmail",
  auth: {
    user: "Resume-ampilfy@outlook.co.il",
    pass: "kulalike#",
  },
});

const {
  errors,
  setError,
  sendError,
  handlePdf,
  handleDoc,
} = require("./consts");

const app = express();

app.use(cors({ origin: "*" }));

app.use(fileUpload());

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});

app.post("/extract-text", (req, res) => {
  try {
    if (!req.files) {
      setError(errors[1]);
    }
    if (!req.files.file) {
      setError(errors[2]);
    }
    let type = req.files.file.name.split(".")[1];
    if (type === "pdf") {
      handlePdf(req, res);
    } else {
      handleDoc(req, res);
    }
  } catch (err) {
    sendError(err, res);
  }
});

app.post("/send-file", (req, res) => {
  const data = req.files.pdfFile.data;
  const fileName = req.files.pdfFile.name;
  const massage = {
    from: "Resume-ampilfy@outlook.co.il",
    to: "kularesume@gmail.com",
    subject: `Please check my resume: ${fileName}`,
    text: "Test!",
    attachments: [
      {
        filename: fileName,
        content: Buffer.from(data, "base64"),
      },
    ],
  };
  transporter.sendMail(massage, function (err, info) {
    if (err) {
      console.log("ERROR" + err);
      return;
    }
    res.send("sucsses");
    console.log("sucsses:" + info.response);
  });
});
