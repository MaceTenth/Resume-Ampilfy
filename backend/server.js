const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const path = require("path");
const parser = require("word-text-parser");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(fileUpload());

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});

app.post("/extract-text", (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
  }
  let type = req.files.pdfFile.name.split(".")[1];
  if (type === "pdf") {
    pdfParse(req.files.pdfFile).then((result) => {
      res.send(result.text);
    });
  } else {
    var absPath = req.files.pdfFile;
    parser(absPath, function (resultList) {
      console.log(resultList.text);
    });

    // parser(req.files.pdfFile)
    //   .then((result) => {
    //     console.log(req.files.pdfFile);
    //     res.send(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
});
