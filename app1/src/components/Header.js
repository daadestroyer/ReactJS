import React from "react";

function Header({name,title}){
    return(
        <div style={{background:"yellow",padding:20,width:300}}>
            <h1>{name}</h1>
            <h1>{title}</h1>
            <h2>This is header component</h2>
            <p>Shubham Nigam Consultant at Genpact</p>
            <p>this is the header component for learning purpose</p>
        </div>
    ); 
}

export default Header;

