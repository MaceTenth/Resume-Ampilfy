const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:65201",
  })
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

  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
});
