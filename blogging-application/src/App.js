import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Components/Base'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

 

const App = () => {
  return (
    <div> 
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App