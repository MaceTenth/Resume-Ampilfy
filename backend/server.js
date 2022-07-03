const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");

const WordExtractor = require("word-extractor");
const extractor = new WordExtractor();

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
    const extracted = extractor.extract(req.files.pdfFile.data);

    extracted.then((doc) => {
      res.send(doc.getBody());
      console.log(doc.getBody());
    });
  }
});
