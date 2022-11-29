import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../../Authentication/Auth'
import Base from '../../Components/Base'

const UserProfile = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(getCurrentUser())
    console.log(userData)


  }, [])


  return (
    <Base>
      <div className='text-center'>
        <h1>UserProfile</h1>
        <h5>User Id : {userData.userId}</h5>
        <h5>User Name :{userData.userEmail}</h5>
        <h5>User About :{userData.about}</h5>
        
        <h5>User Role :  {
         userData.roles?.map((role) => role.role)
       }
            
             
            
          
        </h5>
         
        
          
        
      </div>
    </Base>
  )
}

export default UserProfile