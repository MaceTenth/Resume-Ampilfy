const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

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
