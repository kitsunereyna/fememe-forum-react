import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./LoginPage.css";
import {Link} from "react-router-dom"

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {
    const values = [username, password];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }

    const loginDto = { username: username, password: password};
    console.log(loginDto);
  };


  return (
    <Layout>
      <div className="h-full flex justify-center items-center">
        <div className="login-panel -mt-24">
          <p className="login">Login</p>

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
            value={password}
            onChange={event => setPassword(event.target.value)}
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button onClick={onLoginClick} className="signup">Sign in</button>

          <div className="register-link">
            <p>Not a member?</p>
            <Link to="/register" className="link" >
              Register here!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
