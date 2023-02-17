import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from '../pages/CreatePost/CreatePost'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/Login/LoginPage'
import PostPage from '../pages/Post/PostPage'
import RegisterPage from '../pages/Register/RegisterPage'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/post/:id' element={<PostPage/>}/> 
            <Route path='/post/create' element={<CreatePost/>}/> 
            <Route path='/login' element={<LoginPage/>}/> 
            <Route path='/register' element={<RegisterPage/>}/> 

        </Routes>
    </>
  )
}

export default Routing