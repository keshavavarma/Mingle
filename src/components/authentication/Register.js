import React from "react";
import "./Register.css";
const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form_container">
      <form className="registration_form" onSubmit={submitHandler}>
        <h2 className="form_title">Register</h2>

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
          Register
        </button>
        <p>Have an Account? Login</p>
      </form>
    </div>
  );
};

export default Register;
