import React from "react";
import "./Register.css";
const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form_container">
      <form className="registration_form" onSubmit={submitHandler}>
        <h2 className="form_title">Login</h2>

        <input
          className="inputfield"
          id="email"
          type="email"
          placeholder="Email"
        />

        <input
          className="inputfield"
          id="password"
          type="password"
          placeholder="Password"
        />
        <button className="register_button" type="submit">
          Login
        </button>
        <p>Don't have an Account? Register</p>
      </form>
    </div>
  );
};

export default Login;
