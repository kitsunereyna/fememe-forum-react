import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import CreatePost from "../pages/CreatePost/CreatePost";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import PostPage from "../pages/Post/PostPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RegisterPage from "../pages/Register/RegisterPage";
import SearchPostPage from "../pages/SearchPost/SearchPostPage";
import UpdatePostPage from "../pages/UpdatePost/UpdatePostPage";
import ProtectedRoutes from "./ProtectedRoutes";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search/:q" element={<SearchPostPage />} />
        <Route path="/post/:id" element={<PostPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/post/update/:id" element={<UpdatePostPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
