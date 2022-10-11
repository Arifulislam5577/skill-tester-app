import React from "react";

const Modal = ({ ans, setShowModal }) => {
  return (
    <div className="modal rounded shadow-lg fixed bg-slate-900 w-72 p-5 text-white  z-10 text-center">
      <h2 className="modal-title uppercase font-bold text-orange-500 tracking-wider">
        Correct Answer
      </h2>
      <h3 className="mt-3 ">{ans}</h3>
      <button
        className="bg-orange-500 py-1 px-3 capitalize mt-3 rounded text-xs"
        onClick={() => setShowModal(false)}
      >
        cancel
      </button>
    </div>
  );
};

export default Modal;
