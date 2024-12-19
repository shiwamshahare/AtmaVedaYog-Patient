import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./SignUp/SignUpForm";

const LoginSignUpForm = ({ setIsOpen }) => {
  const [userStatus, setUserStatus] = useState(true);
  console.log(userStatus);
  return (
    <>
      {userStatus ? (
        <LoginForm status={setUserStatus} setIsOpen={setIsOpen} />
      ) : (
        <SignUpForm status={setUserStatus} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default LoginSignUpForm;
