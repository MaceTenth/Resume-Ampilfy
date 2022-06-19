/* eslint-disable no-useless-escape */
import { FaCopy, FaTrash, FaUpload } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const ResumePaste = () => {
  const [content, setContent] = useState("");

  async function handleChange(event) {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("pdfFile", file);

    async function fetch() {
      const result = await axios
        .post("http://localhost:4000/extract-text", formData)
        .then((res) => res);
      setContent(result.data.trim());
    }

    fetch();
  }

  function handleCopyClick() {
    let resumeCopy = content;
    console.log(resumeCopy);
  }

  function handleTrashClick() {
    setContent("");
    document.getElementById("inputFile").value = "";
  }

  return (
    <div className="resumePaste__container">
      <div className="resumePaste__buttons">
        <FaCopy
          className="resumePaste__button copy"
          onClick={handleCopyClick}
        />
        <FaTrash
          className="resumePaste__button trash"
          onClick={handleTrashClick}
        />
        <FaUpload htmlFor="inputFile" className="resumePaste__button file" />
        <input type="file" accept="*" onChange={handleChange} id="inputFile" />
      </div>

      {/* <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          size="small"
        >
          Upload Image
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        {...register("image", { required: true })}
      /> */}

      <textarea
        className="resume__text"
        placeholder="Paste your resume here_ _"
        defaultValue={content}
      ></textarea>
      <div className="button resume__options">
        <button className="send__button">send</button>
        {/* <p>
          compare yuor resume to a job description{"-> "} */}
        <button className="compare__button">compare</button>
        {/* </p> */}
      </div>
    </div>
  );
};

export default ResumePaste;
