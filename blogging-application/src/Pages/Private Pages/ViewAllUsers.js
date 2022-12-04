import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'
import Base from '../../Components/Base'
import { getAllUsers } from '../../Services/UserService'

const ViewAllUsers = () => {


    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsers()
            .then((resp) => {
                // console.log(resp)
                // setting up the categories
                setAllUsers(resp)
            }).catch(error => {
                console.log("error")
                toast.error("something went wrong !")
            });

    }, [])

    useEffect(() => {
        console.log(allUsers)
    }, [allUsers])
    return (
        <Base>
            <Container className='mt-3'>
                <Row>
                    <Col>
                        <CardBody>
                            <h4>User Information</h4>
                            <Table
                                bordered
                                hover
                                responsive
                                striped
                            >
                                <thead>
                                    <tr>
                                        <th>
                                            User Id
                                        </th>
                                        <th>
                                            User Name
                                        </th>
                                        <th>
                                            User Email
                                        </th>
                                        <th>
                                            About
                                        </th>
                                        <th>
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        allUsers.map((user, index) => (
                                            <tr>
                                                <th>
                                                    {user.userId}
                                                </th>
                                                <td>
                                                <Link to={'/publicprofile/' + user.userId}>{user.user_name}</Link>
                                                </td>
                                                <td>
                                                    {user.userEmail}
                                                </td>
                                                <td>
                                                    {user.about}
                                                </td>
                                                <td>
                                                    {
                                                        user.roles.map((role) => role.role)
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </CardBody>

                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default ViewAllUsers