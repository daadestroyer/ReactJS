import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';
import { isLoggedIn } from '../Authentication/Auth';

const PrivateRoute = () => {

   
  if (isLoggedIn()) {
    // if user is not logged in then dont show user dashboard
    return <Outlet />
  }
  else {
    toast.warning("Please login first")
    return  <Navigate to={"/login"}/>
  }
}

export default PrivateRoute