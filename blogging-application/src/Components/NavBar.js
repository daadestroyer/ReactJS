import React, { useState } from 'react'
import { NavLink as ReactLink} from 'react-router-dom'
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

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
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
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                        {/* <NavbarText>Simple Text</NavbarText> */}
                        <NavItem>
                            <Button color='primary' tag={ReactLink} to="/login">Login</Button>{' '}
                            <Button color='primary' tag={ReactLink} to="/signup">Signup</Button>
                        </NavItem>
                        
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar