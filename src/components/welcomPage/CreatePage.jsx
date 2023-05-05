import React from "react";
import { Link } from "react-router-dom";
import Button from "./InputsAndButtons/Button";
import Email from "./InputsAndButtons/Email";
import Password from "./InputsAndButtons/Password";
import Name from "./InputsAndButtons/Name";
import ConfirmPassword from "./InputsAndButtons/ConfirmPassword";

function CreatePage({ clickhandler }) {
  return (
    <>
      <div className="Main2">
        <Name />
        <Email />
        <Password />
        <ConfirmPassword />
        <Button handleClick={clickhandler} props="SignUp" />
        <p className="Para-SignUp-P">
          Already have an account?{" "}
          <Link to="/Login">
            <span>Login</span>
          </Link>
        </p>
        <p className="Para-SignUp-P Para-OR-P">
          <hr />
          OR
          <hr />
        </p>
        <Button props="SignUp with Google" />
      </div>
    </>
  );
}

export default CreatePage;
