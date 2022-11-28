import React from 'react'
import { Button } from 'reactstrap'
import Base from '../Components/Base'
import { NavLink as ReactLink } from 'react-router-dom'

const Home = () => {
  return (
    <Base>
      <div class="container mt-5 jumbotron text-center" style={{ padding: 20, backgroundColor: "#C7C7C74D" }}>

        <h1>Shubham Nigam</h1>
        <p>
          This is developed by Shubham Nigam for learning purpose, its backend is on springboot and frontend is on
        </p>
        <div class="container">
          <Button color="primary" tag={ReactLink} to="/newsfeed" outline>Start Exploring</Button>
        </div>
      </div>
    </Base>
  )
}

export default Home