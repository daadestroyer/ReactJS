import React, { useContext, useEffect, useState } from 'react'
import { Navigate, NavLink as ReactLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import { doLogout, getCurrentUser, isLoggedIn } from '../Authentication/Auth';

const NavBar = () => {

    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState(undefined)



    // whenever this component load useEffect will call
    useEffect(() => {

        // set true/false if user is logged in or not
        setIsLogin(isLoggedIn());
        // if user is logged in user details will be stored otherwise undefined will be returned
        console.log(getCurrentUser());
        setUser(getCurrentUser());

        console.log(isLogin);
        console.log(user);
    }, [isLogin])

    const logout = () => {
        doLogout(() => {
            setIsLogin(false);
            navigate("/")
            toast.success("Logged out successfully")
        })
    }
    return (
        <div>

            <Navbar color='dark' dark expand="md" fixed=''>
                <NavbarBrand tag={ReactLink} to="/">Blogging Application</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>

                    </Nav>

                    {
                        !isLogin && (

                            <NavItem>
                                <Button color='primary' tag={ReactLink} to="/login">Login</Button>{" "}
                                <Button color='primary' tag={ReactLink} to="/signup">Signup</Button>
                            </NavItem>


                        )
                    }
                    <Nav navbar>
                        {
                            isLogin && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/dashboard" >
                                            <u>{user.username}</u>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/profile">
                                            Profile Info
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>

                                        <NavLink onClick={logout} style={{ color: 'red', cursor: "pointer" }}>
                                            <b>Logout</b>
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                        }
                    </Nav>

                </Collapse>
            </Navbar>

        </div>
    )
}

export default NavBar