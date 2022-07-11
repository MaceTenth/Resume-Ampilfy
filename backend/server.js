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

function checkTextLength(text) {
  const max = 5000;
  const min = 500;
  return text.length > min && text.length < max;
}

function handleFileContent(content, res) {
  if (checkTextLength(content) === true) {
    res.send(content);
  } else {
    setError();
  }
}

function setError() {
  const error = new Error(
    `File is forbidden:
    invalid length of text / 
    contains scanned content / 
    contains image without text`,
  );
  error.statusCode = 403;
  throw error;
}

function sendError(err, res) {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
}

app.post("/extract-text", (req, res) => {
  if (!req.files && !req.files.file) {
    res.status(400);
    res.end();
  }
  let type = req.files.file.name.split(".")[1];
  if (type === "pdf") {
    pdfParse(req.files.file)
      .then((result) => {
        handleFileContent(result.text, res);
      })
      .catch((err) => {
        sendError(err, res);
      });
  } else {
    const extracted = extractor.extract(req.files.file.data);
    extracted
      .then((doc) => {
        handleFileContent(doc.getBody(), res);
      })
      .catch((err) => {
        sendError(err, res);
      });
  }
});
