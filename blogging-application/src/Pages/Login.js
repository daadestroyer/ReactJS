import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap'
import Base from '../Components/Base'
import { validateUser } from '../Services/UserService'

const Login = () => {

  // to set login data and to get login data
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  // to handle change event of input box
  const handleChange = (event, property) => {
    setLoginData({
      ...loginData, [property]: event.target.value
    })

  }
  // to see the changes of onChange function immediatly
  // useEffect(() => {
  //   console.log(loginData)
  // }, [loginData])

  // calling setSignupData for reseting form data 
  const resetData = () => {
    setLoginData({
      username: '',
      password: ''
    })
  }

  const [error, setError] = useState({
    errors: {},
    isError: false
  })

  const submitForm = (event) => {
    // stoping the default behavior of submitForm
    event.preventDefault()
    console.log(loginData)
    // call server api to submit form data
    validateUser(loginData).then((response) => {
      console.log(response)
      toast.success("Login Successful")
      setLoginData({
        username: '',
        password: ''
      })
      setError({
        errors: error,
        isError: true
      })

    }).catch(error => {
      console.log(error)
      if (error.response.status == 404) {
        toast.error(error.response.data.message)
      } else if (error.response.status == 400) {
        console.log("something went wrong...")
      }
      setError({
        errors: error,
        isError: true
      })
    });
  }

  return (
    <div >
      <Base>
        <Container className='mt-5'>
          <Row>

            <Col md={{ size: 6, offset: 3 }}>
              <Card color='dark' outline>
                <CardHeader className='bg-dark text-white'>Login Page</CardHeader>
                <CardBody>
                  <Form onSubmit={submitForm}>
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        type='email'
                        name='username'
                        placeholder='Enter your username'
                        value={loginData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        invalid={error.errors?.response?.data?.username ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.username}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={loginData.password}
                        onChange={(e) => handleChange(e, 'password')}
                        invalid={error.errors?.response?.data?.password ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.password}
                      </FormFeedback>

                    </FormGroup>
                    <Container className='text-center'>
                      <Button outline color='success'>Login</Button>{" "}
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

export default Login

