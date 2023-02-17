import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CreatePostIcon from "../Icons/CreatePostIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-corner">
        <Link to="/" className="logo">
          FEMEME
        </Link>
        <Link to="/about">About</Link>
      </div>

      <input type="search" placeholder="Search Fememe" name="search" required />

      <div className="right-corner">
        <button className="btn create-post">
          <Link to="/post/create">
            <CreatePostIcon />
          </Link>
        </button>
        <Link to="/profile" className="profile-page">
          Profile
        </Link>
        <Link to="/login" className="login-page">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
