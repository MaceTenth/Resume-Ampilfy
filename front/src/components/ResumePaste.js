import { FaCopy, FaTrash } from "react-icons/fa";
import { useState } from "react";

const ResumePaste = () => {
  const [myText, setMyText] = useState("");

  const handleTextChange = (event) => {
    setMyText(event.target.value);
  };

  function handleCopyClick() {
    let resumeCopy = myText;
    console.log(resumeCopy);
  }

  function handleTrashClick() {
    setMyText("");
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
      </div>
      <textarea
        className="resume__text"
        placeholder="Paste your resume here_ _"
        value={myText}
        onChange={handleTextChange}
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
