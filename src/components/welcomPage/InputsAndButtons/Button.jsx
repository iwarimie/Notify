import React from "react";
import Styles from "../InputsAndButtons/ButtonModule/Button.module.css";

function Button({ props, handleClick }) {
  return (
    <>
      <button onClick={handleClick} className={Styles.btn}>
        {props}
      </button>
    </>
  );
}

export default Button;
