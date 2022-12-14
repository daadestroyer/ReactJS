import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap'
import Base from '../Components/Base'
import { myAxios } from '../Services/Constant'
import { saveUser } from '../Services/UserService'



const Signup = () => {


  const [signUpData, setSignupData] = useState({
    user_name: '',
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

  // to see the changes of onChange function immediatly
  // useEffect(() => {
  //   console.log(signUpData)
  // }, [signUpData])




  // calling setSignupData for reseting form data 
  const resetData = () => {
    if (signUpData.user_name == '' && signUpData.password == '' && signUpData.password == '' && signUpData.about == '') {
      toast.info("fields are already reset!");
    }
    setSignupData({
      user_name: '',
      userEmail: '',
      password: '',
      about: ''
    })

    setError({
      errors: {},
      isError: false
    })
  }
  // submitting form data
  const submitForm = (event) => {
    // stopping default behavior of submit
    event.preventDefault()

    // call server api to submit form data
    saveUser(signUpData)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success(signUpData.user_name + ' registered successfully...');
        setSignupData({
          user_name: '',
          userEmail: '',
          password: '',
          about: ''
        })
      }).catch((error) => {
        console.log(error);
        toast.error('Invalid/Empty details !');
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
                        name='user_name'
                        placeholder='Enter your name'
                        onChange={(e) => handleChange(e, 'user_name')}
                        value={signUpData.user_name}
                        invalid={error.errors?.response?.data?.user_name ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.user_name}
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