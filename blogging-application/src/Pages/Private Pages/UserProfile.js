import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
import { getCurrentUser } from '../../Authentication/Auth'
import Base from '../../Components/Base'

const UserProfile = () => {

  const [currentUser,setCurrentUser] = useState(null)

  const [userData, setUserData] = useState([])

  useEffect(() => {
    setCurrentUser(getCurrentUser())
    setUserData(getCurrentUser())
    console.log(userData)


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
                  <img style={{ maxWidth: '250px', maxHeight: '300px' }} className='img-fluid rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Y2LJnaCmGkiNXrQ9BDNoWPljvdLT1308iw&usqp=CAU" alt={userData?.user_name} />
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
                   
                    <CardFooter className='text-center'>
                        <Button color='warning'>Update Profile</Button>
                    </CardFooter>
                  

              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container>
    </Base>
  )
}

export default UserProfile

{/* <h1>UserProfile</h1>
<h5>User Id : {userData.userId}</h5>
<h5>User Name : {userData.user_name}</h5>
<h5>User Name : {userData.userEmail}</h5>
<h5>User About :{userData.about}</h5>

<h5>User Role :  {
 userData.roles?.map((role) => role.role)
}
    
     
    
  
</h5> */}