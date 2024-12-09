import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import logoNavyBlue from '../../images/saa-logo.png';
import logoWhite from '../../images/saa-logo-white.png';
import './navbar.css';

const NavigationBar = () => {

    const [navbarBg, setNavbarBg] = useState('#E6E6E6FF');
    const handleScroll = () => {
      if(window.scrollY > 50){
          setNavbarBg('#07a558');
      }  else {
          setNavbarBg('#E6E6E6FF');
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    return (
        <Navbar expand="lg" sticky="top" className="border-bottom"
                style={{
                    backgroundColor: navbarBg, // Dynamic background color
                    transition: 'background-color 0.3s ease-in-out',
                    boxShadow: navbarBg === 'transparent' ? 'none' : '0px 2px 5px #000',
                }}
                variant={navbarBg === 'transparent' ? 'light' : 'dark'}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        alt="SAA Logo"
                        src={logoNavyBlue}
                        width="60"
                        height="60"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-dark">
                        <Nav.Link href="/" style={{color: 'black'}}>Home</Nav.Link>
                        <Nav.Link href="/about" style={{color: 'black'}}>About Us</Nav.Link>


                        <NavDropdown title={<span style={{color: 'black'}}>Alumni</span>} id="basic-nav-dropdown"
                        className="text-dark">
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
