import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import Base from '../Components/Base'
import { getUserByUserId } from '../Services/UserService'


const PublicUserProfile = () => {

    const { userId } = useParams()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // load user by user id
        getUserByUserId(userId)
            .then((data) => {
                console.log(data)
                setUserData(data)
            }).catch((error) => {
                console.log(error)
                toast.error('something went wrong')
            })
    }, [])

    return (
        <Base>
            <Container className='m-5 text-center'>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Card className='bg-light shadow outline'>
                            <CardBody>
                                <h4 className='text-uppercase'>User Information</h4>
                                <Container className='text-center'>
                                    <img style={{ maxWidth: '250px', maxHeight: '300px' }} className='img-fluid rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Y2LJnaCmGkiNXrQ9BDNoWPljvdLT1308iw&usqp=CAU" />
                                </Container>
                                <Table responsive striped hover bordered={true} className='mt-5'>
                                    <tbody >
                                        <tr>
                                            <td><b>LCWDBlogs User Id</b></td>
                                            <td>LCWD#{userData?.userId}</td>
                                        </tr>
                                        <tr>
                                            <td><b>User Name</b></td>
                                            <td>{userData?.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td><b>User Email</b></td>
                                            <td>{userData?.userEmail}</td>
                                        </tr>
                                        <tr>
                                            <td><b>User About</b></td>
                                            <td>{userData?.about}</td>
                                        </tr>
                                        <tr>
                                            <td><b>User Role</b></td>
                                            <td>
                                                {
                                                    userData?.roles?.map((role) => role.role)
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default PublicUserProfile