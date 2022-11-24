import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Components/Base'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify'


const App = () => {
    return (

        <BrowserRouter>
            <ToastContainer
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App