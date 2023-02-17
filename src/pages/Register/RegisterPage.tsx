import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Login/LoginPage.css";
import {Link} from "react-router-dom"

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onRegisterClick = () => {
    const values = [username, password, email];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }

    const registerDto = { username: username, password: password, email: email};
    console.log(registerDto);
  };


  return (
    <Layout>
      <div className="h-full flex justify-center items-center">
        <div className="login-panel -mt-24">
          <p className="login">Register</p>

          <input
            value={username}
            onChange={event => setUsername(event.target.value)}
            className="input"
            type="text"
            placeholder="Username"
            name="uname"
            required
          />
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            className="input"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button onClick={onRegisterClick} className="signup">Sign up</button>

          <div className="register-link">
            <p>Already have an account?</p>
            <Link to="/login" className="link" >
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
