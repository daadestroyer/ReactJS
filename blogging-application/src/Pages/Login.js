import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import Base from '../Components/Base'

const Login = () => {
  return (
    <div >
      <Base>
        <Container className='mt-5'>
          <Row>
             
            <Col md={{size:6,offset:3}}>
              <Card color='dark' outline>
                <CardHeader className='bg-dark text-white'>Login Page</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label>Email</label>
                      <Input type='email' name='uname' placeholder='Enter your username' />
                    </FormGroup>
                    <FormGroup>
                      <label>Password</label>
                      <Input type='password' name='upwd' placeholder='Enter your password' />
                    </FormGroup>
                    <Container className='text-center'>
                      <Button outline color='success'>Login</Button>{" "}
                      <Button type='reset'  outline color='warning'>Reset</Button>
                    </Container>
                  </Form>
                </CardBody>
                <CardFooter className='bg-dark text-danger'>Here signip error will come</CardFooter>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </Base>
    </div>
  )
}

export default Login

