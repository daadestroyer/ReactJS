import React from 'react';
import { Button } from 'reactstrap';

function Home() {
    return (
        <div class="jumbotron text-center" style={{ padding: 20,backgroundColor:"#C7C7C74D" }}>

            <h1>Shubham Nigam</h1>
            <p>
                This is developed by Shubham Nigam for learning purpose, its backend is on springboot and frontend is on 
            </p>
            <div class="container">
                <Button color="primary" outline>Start Using</Button>
            </div>



        </div>
    );
}

export default Home;