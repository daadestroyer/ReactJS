import React from 'react';
import { Card ,CardBody,CardSubtitle,CardText,Container,Button} from 'reactstrap';

function Course({course}){
    return (
        <Card  style={{width:500}}>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color='danger' >Delete</Button>{" "}
                    <Button color='primary'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
} 

export default Course;
