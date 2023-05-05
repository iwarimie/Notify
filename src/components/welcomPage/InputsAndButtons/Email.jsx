import React from "react";
import styles from "../InputsAndButtons/InputsTagmodule/InputsTag.module.css"

function Email() {
  return (
    <>
      <form>
      <p>Email</p>
        <input type="text" placeholder="Email" className={styles.input} />
      </form>
    </>
  );
}

export default Email;
