import React from 'react';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../images/saa-logo.png'

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        alt="SAA Logo"
                        src={logo}
                        width="60"
                        height="60"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-dark">About Us</Nav.Link>


                        <NavDropdown title="Alumni" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Alumni Directory</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Be a Member</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
