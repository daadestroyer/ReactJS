import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap'
import Base from '../Components/Base'
import { myAxios } from '../Services/Constant'
import { saveUser } from '../Services/UserService'



const Signup = () => {


  const [signUpData, setSignupData] = useState({
    userName: '',
    userEmail: '',
    password: '',
    about: ''
  })

  // handleChange event
  const handleChange = (event, property) => {
    // setting form data dynamically from input box to object
    setSignupData({ ...signUpData, [property]: event.target.value })
  }

  const [error, setError] = useState({
    errors: {},
    isError: false
  })

  // useEffect(() => {
  //   console.log(signUpData)
  // }, [signUpData])




  // calling setSignupData for reseting form data 
  const resetData = () => {
    setSignupData({
      userName: '',
      userEmail: '',
      password: '',
      about: ''
    })
  }
  // submitting form data
  const submitForm = async (event) => {
    // stopping default behavior of submit
    event.preventDefault()

    // call server api to submit form data
    saveUser(signUpData)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success(signUpData.userName + ' registered successfully...', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSignupData({
          userName: '',
          userEmail: '',
          password: '',
          about: ''
        })
      }).catch((error) => {
        console.log(error);
        toast.error('Invalid/Empty details !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // handling error value and showing to user
        setError({
          errors: error,

          isError: true
        })
      })
  };

  return (
    <div>
      <Base>
        <Container className='mt-5'>
          <Row>
            {/* {JSON.stringify(signUpData)} */}
            <Col md={{ size: 6, offset: 3 }}>
              <Card color='dark' outline>
                <CardHeader className='bg-dark text-white'>Signup Page</CardHeader>
                <CardBody>
                  <Form onSubmit={submitForm}>
                    <label>Name</label>
                    <FormGroup>
                      <Input
                        type='text'
                        name='userName'
                        placeholder='Enter your name'
                        onChange={(e) => handleChange(e, 'userName')}
                        value={signUpData.userName}
                        invalid={error.errors?.response?.data?.userName ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.userName}
                      </FormFeedback>
                    </FormGroup>

                    <label>Email</label>
                    <FormGroup>
                      <Input
                        type='email'
                        name='userEmail'
                        placeholder='Enter your email'
                        onChange={(e) => handleChange(e, 'userEmail')}
                        value={signUpData.userEmail}
                        invalid={error.errors?.response?.data?.userEmail ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.userEmail}
                      </FormFeedback>
                    </FormGroup>

                    <label>Password</label>
                    <FormGroup>
                      <Input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={(e) => handleChange(e, 'password')}
                        value={signUpData.password}
                        invalid={error.errors?.response?.data?.password ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.password}
                      </FormFeedback>
                    </FormGroup>

                    <label>About</label>
                    <FormGroup>
                      <Input
                        type='textarea'
                        name='about'
                        placeholder='Enter about you'
                        style={{ height: 100 }}
                        onChange={(e) => handleChange(e, 'about')}
                        value={signUpData.about}
                        invalid={error.errors?.response?.data?.about ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.about}
                      </FormFeedback>
                    </FormGroup>

                    <Container className='text-center'>
                      <Button type='submit' outline color='success'>Signup</Button>{" "}
                      <Button onClick={resetData} type='reset' outline color='warning'>Reset</Button>
                    </Container>
                  </Form>
                </CardBody>
                <CardFooter className='bg-dark text-danger'></CardFooter>
              </Card>
            </Col>

          </Row>
        </Container>
      </Base>
    </div>
  )
}

export default Signup