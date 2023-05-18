import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import classes from "./SignUp.module.css";
import Validation from "../Validation";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function firstNameHandler(e) {
    setFirstName(e.target.value);
  }

  function LastNameHandler(e) {
    setLastName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function confirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    const validationErrors = Validation(values);

    const registerUrl = "http://localhost:8000/api/register/";

    if (Object.keys(validationErrors).length === 0) {
      const json = JSON.stringify({
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": password,
        "password2": confirmPassword,
      });
      
      axios({
        method: "post",
        url: registerUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: json,
      }).then((response) => {
        console.log(response.data);
      });

      navigate("/");
    } else {
      setErrors(validationErrors);
    }

    // const json = JSON.stringify({
    //   "first_name": firstName,
    //   "last_name": lastName,
    //   "email": email,
    //   "password": password,
    //   "password2": confirmPassword,
    // });
    // const response = await axios.post(
    //   "http://localhost:8000/api/register/",
    //   json,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // console.log(response.data);
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
      <h1 style={{ fontWeight: "bold", marginBottom: "15px" }}>Sign up</h1>
      <form className={classes.signForm} onSubmit={submitHandler}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          id="first-name"
          value={firstName}
          onChange={firstNameHandler}
        />
        {errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="last-name"
          value={lastName}
          onChange={LastNameHandler}
        />
        {errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
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
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={confirmPasswordHandler}
        />
        {errors.confirmPassword && (
          <span style={errorStyle}>{errors.confirmPassword}</span>
        )}

        <button type="submit">Sign up</button>

        <div className={classes.signupSignIn}>
          <p>
            Already have an account?{" "}
            <Link to="/" style={{ color: "#24a0ed" }}>
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
