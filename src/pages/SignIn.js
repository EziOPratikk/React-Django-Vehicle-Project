import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import classes from "./SignUp.module.css";
import Validation from "../Validation";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const values = {
      email,
      password,
    };
    // setErrors(Validation(values));

    const loginUrl = "http://localhost:8000/api/login/";

    const validationErrors = Validation(values);

    if (Object.keys(validationErrors).length < 2) {
      const json = JSON.stringify({
        "email": email,
        "password": password,
      });

      axios({
        method: "post",
        url: loginUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: json,
      }).then((response) => {
        console.log(response.data);
        navigate("/home");
      }).catch((error) => {
        console.log(error.response.status);
        if(error.response.status === 401) {
          alert('Invalid')
        }
      });
    } else {
      setErrors(validationErrors);
    }
  }

  const errorStyle = {
    color: "red",
    fontSize: "10px",
    maxHeight: "15px",
    maxWidth: "200px",
    textOverflow: "ellipsis",
  };

  return (
    <div className={classes.formContainer}>
      <h1 style={{ fontWeight: "bold", marginBottom: "15px" }}>Sign in</h1>
      <form className={classes.signForm} onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={emailHandler}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
        <button type="submit">Sign in</button>
        <div className={classes.signupSignIn}>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#24a0ed" }}>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
