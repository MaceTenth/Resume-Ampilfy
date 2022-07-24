import React, { useState } from "react";
import About from "./About";
import ResumePaste from "./ResumePaste";
import PopupMessage from "./PopupMessage";

const Main = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [text, setText] = useState("");

  function closePopup() {
    setIsPopupOpen(false);
    setText("");
  }

  function updateMessage(message) {
    setText(message);
    setIsPopupOpen(true);
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  const closeByOverlayClick = (e) => {
    closePopup();
    e.stopPropagation();
  };
  const onModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container">
      <About />
      <ResumePaste
        updateMessage={updateMessage}
        handleSend={props.handleSend}
      />

      <PopupMessage
        isOpen={isPopupOpen}
        onClose={closePopup}
        message={text}
        onOverlayClick={closeByOverlayClick}
        onModalClick={onModalClick}
      />
    </div>
  );
};
export default Main;
