import React, { Fragment } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

function AddCourses(){
   return (
    <>
        <Fragment>
        <h4>Fill course details</h4>
            <Form>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder='Enter here' name="cid" id="cid"/>
                </FormGroup>
                <FormGroup>
                    <label>Course Title</label>
                    <Input type="text" placeholder='Enter here' name="ctitle" id="ctitle"/>
                </FormGroup>
                <FormGroup>
                    <label>Course Description</label>
                    <Input type="textarea" placeholder='Enter here' name="cdesc" id="cdesc" style={{height:100}}/>
                </FormGroup>
                <Container className='text-center'>
                    <Button color='success' outline>Add Course</Button>{" "}
                    <Button color='warning' type='reset' outline>Reset</Button>
                </Container>
            </Form>
        </Fragment>
    </>
   );
}

export default AddCourses;