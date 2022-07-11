/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

function PopupMessage(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup__opened" : ""}`}
      onClick={props.onOverlayClick}
    >
      <div className="popup__message" onClick={props.onModalClick}>
        <button
          onClick={props.onClose}
          aria-label="popup__close"
          className={`popup__close`}
          type="button"
          id="btnClose"
        ></button>
        <div className="info" name="info">
          <h2 className="info__text">{props.message}</h2>
        </div>
      </div>
    </div>
  );
}

export default PopupMessage;
