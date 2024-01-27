import React from "react";
import LoginForm from "../components/LoginPage/LoginForm";
import Welcome from "../components/LoginPage/Welcome";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="m-auto w-[80vw] md:w-[50vw] flex flex-col p-10 gap-10 items-center justify-center">
        <Welcome />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
