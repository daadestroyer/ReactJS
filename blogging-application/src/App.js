import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Components/Base'
 
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify'
import UserDashboard from './Pages/Private Pages/UserDashboard'


import PrivateRoute from './Components/PrivateRoute'
import UserProfile from './Pages/Private Pages/UserProfile'
import AddPost from './Pages/Private Pages/AddPost'
import About from './Pages/Private Pages/About'
import NewsFeeds from './Pages/NewsFeeds'
import AddCategory from './Pages/Private Pages/AddCategory'
import PostInfo from './Pages/PostInfo'


const App = () => {
    return (

        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newsfeed" element={<NewsFeeds/>} />
                <Route path="/postinfo/:postId" element={<PostInfo/>} />
                <Route path="about" element={<About/>} />
                
                <Route path="/user" element={<PrivateRoute />} >
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="profile" element={<UserProfile/>} />
                    <Route path="addpost" element={<AddPost/>} />
                    <Route path="addcat" element={<AddCategory/>} />
                </Route>



            </Routes>
        </BrowserRouter>

    )
}

export default App

