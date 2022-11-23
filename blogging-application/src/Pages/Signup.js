import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import Base from '../Components/Base'

const Signup = () => {
  return (
    <div>
      <Base>
        <Container className='mt-5'>
          <Row>
             
            <Col md={{size:6,offset:3}}>
              <Card color='dark' outline>
                <CardHeader className='bg-dark text-white'>Signup Page</CardHeader>
                <CardBody>
                  <Form>
                    <label>Name</label>
                    <FormGroup>
                      <Input type='text' name='uname' placeholder='Enter your name' />
                    </FormGroup>
                    <label>Email</label>
                    <FormGroup>
                      <Input type='email' name='uemail' placeholder='Enter your email' />
                    </FormGroup>
                    <label>Password</label>
                    <FormGroup>
                      <Input type='password' name='upwd' placeholder='Enter your password' />
                    </FormGroup>
                    <label>About</label>
                    <FormGroup>
                      <Input type='textarea' name='uabout' placeholder='Enter about you' style={{ height: 100 }} />
                    </FormGroup>
                    <Container className='text-center'>
                      <Button outline color='success'>Signup</Button>{" "}
                      <Button type='reset' outline color='warning'>Reset</Button>
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