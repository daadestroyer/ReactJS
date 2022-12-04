import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'
import Base from '../../Components/Base'
import { deleteUserByUserId, getAllUsers } from '../../Services/UserService'
import { BsFillTrashFill } from 'react-icons/bs';

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

    function loadAllUserRefresh(){
        getAllUsers()
            .then((resp) => {
                // console.log(resp)
                // setting up the categories
                setAllUsers(resp)
            }).catch(error => {
                console.log("error")
                toast.error("something went wrong !")
            });
    }

    const deleteUser = (user) => {
        deleteUserByUserId(user.userId)
            .then((resp) => {
                console.log(resp)
                toast.success('user deleted successfully')
                loadAllUserRefresh()
            }).catch((err) => {
                console.log(err)
            })
    }

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
                                        <th>
                                            Action
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
                                                {/* <td style={{ backgroundColor: user.roles.map((role) => role.role === 'ROLE_ADMIN') ? 'red' : 'yellow' }}>
                                                    {
                                                        user.roles.map((role) => role.role)
                                                    }
                                                </td> */}

                                                {
                                                    user.roles?.map((role) => role.role) == 'ROLE_ADMIN' && (
                                                        <td style={{ backgroundColor: 'green' }}>
                                                            {
                                                                user.roles.map((role) => role.role)
                                                            }
                                                        </td>
                                                    )
                                                }

                                                {
                                                    user.roles?.map((role) => role.role) != 'ROLE_ADMIN' && (
                                                        <td style={{ backgroundColor: 'yellow' }}>
                                                            {
                                                                user.roles.map((role) => role.role)
                                                            }
                                                        </td>
                                                    )
                                                }
                                                <td style={{ color: 'red' }} ><BsFillTrashFill onClick={() => deleteUser(user)} /></td>
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