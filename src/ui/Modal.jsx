import React, { useState } from "react";
import SpringModal from "./SpringModal";

const Modal = ({ title, btn, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={`${btn}`}>
        {title}
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
    </>
  );
};

export default Modal;
