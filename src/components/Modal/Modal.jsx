import React from "react";
import "./Modal.css";

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">{children}</div>
    </div>
  );
};

export default Modal;
