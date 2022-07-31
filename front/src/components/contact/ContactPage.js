import React, { useState, useEffect } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

export const ContactPage = () => {
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [baseFile, setBaseFile] = useState("");

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const onChange = async (e) => {
    const currFile = e.target.files[0];
    const base64 = await convertBase64(currFile);
    console.log("base64is", base64);
    setBaseFile(base64);
    setFile(currFile);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", file);

    console.log(file);
    axios
      .post("http://localhost:4000/send-file", formData)

      .then(
        (result) => {
          console.log(result);
          console.log("message sent!");
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      {status && renderAlert()}
      <h1>Contact Us!</h1>
      <MdEmail />
      <span>kularesume@gmail.com</span>
      <FaLinkedin />
      <div>
        <p>
          Unable to attach your CV? Please send them to us here and we will
          contact you in the next few days
        </p>
      </div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Attach file:</label>
        <input type="file" name="file" onChange={onChange} />
        <br></br>
        <img src={baseFile} height="100px" />

        {/* <label>Message</label> */}
        {/* <textarea name="message" /> */}

        <input type="submit" value="Send" className="sendBtn" />
      </form>
      <img
        src="https://b7net.co.il/dyncontent/tmp/71/2021_10_11_2e100ef1-3cd0-4534-a3ff-42e90d737a13_1200_630_Fit_.jpg"
        alt="kula-like"
        className="img"
      />
    </div>
  );
};

const renderAlert = () => (
  <div className="alert">
    <p>Your message sent successfuly!</p>
  </div>
);
