import React from "react";
import { Link } from "react-router-dom";
import Button from "./InputsAndButtons/Button";
import Email from "./InputsAndButtons/Email";
import Password from "./InputsAndButtons/Password";

function LoginPage({ Clickhandler }) {
  return (
    <>
      <div className="Main">
        <Email />
        <Password />
        <p className="Para-Forgot-P">Forgot Password?</p>
        <Link to='/'><Button handleClick={Clickhandler} props="Login" /></Link>
        <p className="Para-SignUp-P">
          Dont have an account?{" "}
          <Link to="/CreatePage">
            <span>Sign Up</span>
          </Link>
        </p>

        <p className="Para-SignUp-P Para-OR-P">
          <hr />
          OR
          <hr />
        </p>
        <Button props="Login with Google" />
      </div>
    </>
  );
}

export default LoginPage;
