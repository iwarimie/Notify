import React from "react";
import styles from "../InputsAndButtons/InputsTagmodule/InputsTag.module.css";

function ConfirmPassword() {
  return (
    <>
      <div className="">
        <form>
          <p>ConfirmPassword</p>
          <input
            type="text"
            placeholder="ConfirmPassword"
            className={styles.input}
          />
        </form>
      </div>
    </>
  );
}
export default ConfirmPassword;
