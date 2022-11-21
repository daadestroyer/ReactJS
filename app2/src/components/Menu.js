import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Menu() {
    return (
        <>
            <ListGroup>
                <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="/add-courses" action>Add Courses</ListGroupItem>
                <ListGroupItem tag="a" href="/all-courses" action>All Courses</ListGroupItem>
            </ListGroup>
        </>
    );
}

export default Menu;