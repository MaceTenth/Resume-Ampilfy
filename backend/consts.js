const pdfParse = require("pdf-parse");
const WordExtractor = require("word-extractor");
const extractor = new WordExtractor();

const errors = [
  {
    err: "File is forbidden:\n invalid length of text / contains scanned content / contains image without text",
    status: 403,
  },
  {
    err: "no file",
    status: 400,
  },
  {
    err: "no file name",
    status: 400,
  },
  {
    err: "An error occurred on the server",
    status: 500,
  },
];

function checkTextLength(text) {
  const max = 5000;
  const min = 500;
  return text.length > min && text.length < max;
}

function handleFileContent(content, res) {
  if (checkTextLength(content) === true) {
    res.send(content);
  } else {
    setError(errors[0]);
  }
}

function setError(obj) {
  const { err, status } = obj;
  console.log(err, status);
  const error = new Error(err);
  error.statusCode = status;
  throw error;
}

function sendError(err, res) {
  const { statusCode = errors[3].ststus, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? errors[3].err : message,
  });
}

function handlePdf(req, res) {
  pdfParse(req.files.file)
    .then((result) => {
      handleFileContent(result.text, res);
    })
    .catch((err) => {
      sendError(err, res);
    });
}

function handleDoc(req, res) {
  const extracted = extractor.extract(req.files.file.data);
  extracted
    .then((doc) => {
      handleFileContent(doc.getBody(), res);
    })
    .catch((err) => {
      sendError(err, res);
    });
}

module.exports = {
  errors,
  setError,
  sendError,
  handlePdf,
  handleDoc,
};
