import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  // variable declare for email in react
  const [email, setEmail] = useState("");
  // variable declare for password in react
  const [password, setPassword] = useState("");

  // for login button works function
  const login = (event) => {
    event.preventDefault(); // stop the page refresh

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // you loged in successfully and retrun to home page
        navigate.push("/");
      })
      .catch((err) => alert(err));
  };

  // for register button function
  const register = (event) => {
    event.preventDefault(); // stop the page refresh
    auth
      .createWithEmailAndPassword(email, password)
      .then((auth) => {
        // sucessfully register users
        navigate.push("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://c8.alamy.com/comp/2CBC2KP/amazon-logo-2CBC2KP.jpg"
          alt="amazon-icon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
        </form>
        <form>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of use & sale. Please
          see our privacy notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
