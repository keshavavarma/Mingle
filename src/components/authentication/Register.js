import { useRef, useState } from "react";
import "./Register.css";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../../contexts/AuthContext";
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup, currentUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords Don't Match");
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess("Account Created Successfully");
      emailRef.current.value = "";
      passwordConfirmationRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
      setError("Could Not Create an Account");
      emailRef.current.value = "";
      passwordConfirmationRef.current.value = "";
      passwordRef.current.value = "";
    }
    console.log("Current User", currentUser);
    setLoading(false);
  };

  return (
    <div className="form_container">
      <form className="registration_form" onSubmit={submitHandler}>
        <h2 className="form_title">Register</h2>
        {error && (
          <Alert
            severity="error"
            onClose={() => {
              setError("");
            }}
          >
            {error}
          </Alert>
        )}
        {success && (
          <Alert
            severity="success"
            onClose={() => {
              setSuccess("");
            }}
          >
            {success}
          </Alert>
        )}
        <input
          ref={emailRef}
          className="inputfield"
          type="email"
          placeholder="Email"
          onChange={(e) => (emailRef.current.value = e.target.value)}
        />

        <input
          ref={passwordRef}
          className="inputfield"
          type="password"
          placeholder="Password"
          onChange={(e) => (passwordRef.current.value = e.target.value)}
        />
        <input
          ref={passwordConfirmationRef}
          className="inputfield"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            (passwordConfirmationRef.current.value = e.target.value)
          }
        />
        <button disabled={loading} className="register_button" type="submit">
          {loading ? <CircularProgress color="inherit" /> : "Register"}
        </button>
        <p>Have an Account? Login</p>
      </form>
    </div>
  );
};

export default Register;
