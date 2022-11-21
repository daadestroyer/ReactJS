
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Add Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/all-courses" action>All Courses</Link>
            </ListGroup>
        </>
    );
}

export default Menu;