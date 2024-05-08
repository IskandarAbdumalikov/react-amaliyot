import React from "react";
import "./module.scss";

const Module = ({ bool, children, setShowModal }) => {
  function closeModal() {
    setShowModal(false);
    console.log("false");
    document.body.style.overflow = "auto"
  }
  return (
    <div className={bool ? "module" : "hideModule"}>
      <h1>Module</h1>
      <div className="container module__cards">
        <h1 className="close__btn" onClick={closeModal}>
          X
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Module;
