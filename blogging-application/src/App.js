import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Components/Base'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify'
import UserDashboard from './Pages/Private Pages/UserDashboard'


import PrivateRoute from './Components/PrivateRoute'
import UserProfile from './Pages/Private Pages/UserProfile'


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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/user" element={<PrivateRoute />} >
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="profile" element={<UserProfile/>} />
                </Route>



            </Routes>
        </BrowserRouter>

    )
}

export default App

