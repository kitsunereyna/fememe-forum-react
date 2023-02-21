import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import CreatePostIcon from "../Icons/CreatePostIcon";
import { useUserStore } from "../../store/userStore";
import { clearLocalStorage } from "../../api/user";
import Search from "../Search/Search";

const Navbar = () => {
  const isAuth = useUserStore(state => state.isAuth);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    clearLocalStorage();
    navigate(0);
  };

  const renderedCreateButton = isAuth ? (
    <button className="btn create-post">
      <Link to="/post/create">
        <CreatePostIcon />
      </Link>
    </button>
  ) : (
    <></>
  );

  const renderedLoginButton = isAuth ? (
    <>
      <Link to="/profile" className="link-text">
        Profile
      </Link>
      <button onClick={onLogoutClick}>
        <p className="link-text">Logout</p>{" "}
      </button>
    </>
  ) : (
    <Link to="/login" className="link-text">
      Login
    </Link>
  );

  return (
    <div className="navbar">
      <div className="left-corner">
        <Link to="/" className="logo">
          FEMEME
        </Link>
        <Link to="/about" className="link-text">
          About
        </Link>
      </div>

      <Search />
      <div className="right-corner">
        {renderedCreateButton}

        {renderedLoginButton}
      </div>
    </div>
  );
};

export default Navbar;
