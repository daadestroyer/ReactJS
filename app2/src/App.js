import React from 'react';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import AddCourses from './components/AddCourses';
import AllCourses from './components/AllCourses';
import Header from './components/Header';
import Menu from './components/Menu';
import Error from './components/Error';
import { BrowserRouter , Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const btnHandle = () => {
    toast.success('Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (

    <div style={{ margin: 50 }}>
     <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row className='mt-2'>
            <Col md={4}> <Menu /> </Col>
            <Col md={8}>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/add-courses" element={<AddCourses/>} />
                <Route exact path="/all-courses" element={<AllCourses/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
