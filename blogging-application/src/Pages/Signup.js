import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
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

  useEffect(() => {
    console.log(signUpData)
  }, [signUpData])


  

  // calling setSignupData for reseting form data 
  const resetData = () => {
    setSignupData({
      uname: '',
      uemail: '',
      upwd: '',
      uabout: ''
    })
  }
  // submitting form data
  const submitForm = async (event) => {
    // stopping default behavior of submit
    event.preventDefault()

    //console.log('data submitted')
    console.log(signUpData)

    // validate form data

    // call server api to submit form data
    saveUser(signUpData)
    .then((resp) => {
      console.log(resp);
      console.log("success log");
    }).catch((error) => {
      console.log(error);
      //console.log("Error log");
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
                        value={signUpData.uname}

                      />
                    </FormGroup>

                    <label>Email</label>
                    <FormGroup>
                      <Input
                        type='email'
                        name='userEmail'
                        placeholder='Enter your email'
                        onChange={(e) => handleChange(e, 'userEmail')}
                        value={signUpData.uemail}

                      />
                    </FormGroup>

                    <label>Password</label>
                    <FormGroup>
                      <Input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={(e) => handleChange(e, 'password')}
                        value={signUpData.upwd}


                      />
                    </FormGroup>

                    <label>About</label>
                    <FormGroup>
                      <Input
                        type='textarea'
                        name='about'
                        placeholder='Enter about you'
                        style={{ height: 100 }}
                        onChange={(e) => handleChange(e, 'about')}
                        value={signUpData.uabout}
                      />
                    </FormGroup>

                    <Container className='text-center'>
                      <Button type='submit' outline color='success'>Signup</Button>{" "}
                      <Button onClick={resetData} type='reset' outline color='warning'>Reset</Button>
                    </Container>
                  </Form>
                </CardBody>
                <CardFooter className='bg-dark text-danger'>Here login error will come</CardFooter>
              </Card>
            </Col>

          </Row>
        </Container>
      </Base>
    </div>
  )
}

export default Signup