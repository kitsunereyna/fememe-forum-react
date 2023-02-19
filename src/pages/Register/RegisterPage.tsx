import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Login/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthResponse, RegisterDto } from "../../dto/user";
import { registerUser, saveAuthToLocalStorage } from "../../api/user";
import { useUserStore } from "../../store/userStore";
import { AVATARS } from "../../mock/avatars";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const fillUserState = useUserStore(state => state.fillUserState);
  const navigate = useNavigate();

  const onRegisterClick = async () => {
    const values = [username, password, email];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }
    const randomAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];

    const registerDto: RegisterDto = {
      username: username,
      password: password,
      email: email,
      avatar: randomAvatar,
    };

    const res = await registerUser(registerDto);

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
    <Layout title="Register">
      <div className="h-full flex justify-center items-center">
        <div className="login-panel">
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

          <button onClick={onRegisterClick} className="signup">
            Sign up
          </button>

          <div className="register-link">
            <p>Already have an account?</p>
            <Link to="/login" className="link">
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
