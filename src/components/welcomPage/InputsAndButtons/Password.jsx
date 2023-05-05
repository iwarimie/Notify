import React from "react";
import styles from "../InputsAndButtons/InputsTagmodule/InputsTag.module.css"

function Password() {
  return (
    <>
      <form>
      <p>Password</p>
        <input type="text" placeholder="Password" className={styles.input}/>
        
      </form>
    </>
  );
}

export default Password;