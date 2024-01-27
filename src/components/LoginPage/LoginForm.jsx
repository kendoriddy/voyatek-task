import React from "react";
import "../../assets/styles/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="form-container">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form>
        <div className="form-field">
          <input type="email" required autoComplete="new-password" />
          <label>Business Email</label>
        </div>
        <div className="form-field">
          <input type="password" required autoComplete="new-password" />
          <label>Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
