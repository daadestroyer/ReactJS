import React from "react";
import { Container } from "reactstrap";

function Header() {
    return (
        <div>
            <Container className="text-center p-5" style={{backgroundColor:"#dcdcdc"}}>
                <h1>Welcome to courses application</h1>
            </Container>
        </div>
    );
}

export default Header;
