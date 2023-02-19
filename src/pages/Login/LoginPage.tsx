import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthResponse, LoginDto } from "../../dto/user";
import { loginUser, saveAuthToLocalStorage } from "../../api/user";
import { useUserStore } from "../../store/userStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fillUserState = useUserStore(state => state.fillUserState);
  const navigate = useNavigate();

  const onLoginClick = async () => {
    const values = [email, password];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }

    const loginDto: LoginDto = { email: email, password: password };

    const res = await loginUser(loginDto);

    if (res.status !== 200) {
      window.alert(res.data?.error);
      return;
    }

    const authRes: AuthResponse = res.data;
    fillUserState(authRes.token, authRes.user);
    saveAuthToLocalStorage(authRes);
    navigate("/");
  };

  return (
    <Layout title="Login">
      <div className="h-full flex justify-center items-center">
        <div className="login-panel">
          <p className="login">Login</p>

          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            className="input"
            type="email"
            placeholder="Email"
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

          <button onClick={onLoginClick} className="signup">
            Sign in
          </button>

          <div className="register-link">
            <p>Not a member?</p>
            <Link to="/register" className="link">
              Register here!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
