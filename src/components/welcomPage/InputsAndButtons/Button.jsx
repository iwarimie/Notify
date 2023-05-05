import React from "react";
import Styles from "../InputsAndButtons/ButtonModule/Button.module.css"

function Button({props}) {
  return (
    <>
      <button className={Styles.btn}>{props}</button>
    </>
  );
}

export default Button;
