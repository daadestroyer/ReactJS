import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Base = ({title="Welcome to our website",children}) => {
  return (
    <div className='container-fluid p-0 m-0'>
        <NavBar/>

        {/* calling dynamic children */}
        {children}

        <Footer/>
    </div>
  )
}

export default Base