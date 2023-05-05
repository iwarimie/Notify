import React from "react";
import Button from "./InputsAndButtons/Button";
import Email from "./InputsAndButtons/Email";
import Password from "./InputsAndButtons/Password";

function LoginPage() {
  return (
    <>
      <div className="Main">
        <Email />
        <Password />
        <p className="Para-ForgotP">Forgot Password?</p>
        <Button props = "Login"/>
      </div>
    </>
  );
}

export default LoginPage;
