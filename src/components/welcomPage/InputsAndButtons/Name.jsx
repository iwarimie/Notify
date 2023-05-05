import React from "react";
import styles from "../InputsAndButtons/InputsTagmodule/InputsTag.module.css";

function Name() {
  return (
    <>
      <form>
        <p>Name</p>
        <input type="text" placeholder="Name" className={styles.input} />
      </form>
    </>
  );
}

export default Name;
