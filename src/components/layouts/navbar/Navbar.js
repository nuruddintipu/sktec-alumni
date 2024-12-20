import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import logoNavyBlue from '../../../assets/images/saa-logo.png';
import logoWhite from '../../../assets/images/saa-logo-white.png';
import './navbar.css';
import {Link} from "react-router-dom";
import routes from "../../../route-paths/routes";

const NavigationBar = () => {
    // State for scrolling behavior
    const [scrolling, setScrolling] = useState(false);

    // Dynamic styles for navbar background and logo
    const [navbarBg, setNavbarBg] = useState('#E6E6E6FF');
    const [logo, setLogo] = useState(logoNavyBlue);


    // Scroll event handler to update styles dynamically
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
            setNavbarBg('#12293d');
            setLogo(logoWhite);

        } else {
            setScrolling(false);
            setNavbarBg('#E6E6E6FF');
            setLogo(logoNavyBlue);

        }
    };

    // Attach scroll event listener on mount and clean up on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    // Dynamic class for NavDropdown
    const dropdownClass = scrolling ? 'dropdown-scrolled' : 'dropdown-default';

    return (
        <Navbar
            variant={scrolling?'dark':''}
            expand="lg"
            sticky="top"
            className="border-bottom"
            style={{
                backgroundColor: navbarBg, // Dynamic background color
                transition: 'background-color 0.3s ease-in-out',
                boxShadow: navbarBg === 'transparent' ? 'none' : '0px 2px 5px #000',
            }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/">
                    <Image
                        alt="SAA Logo"
                        src={logo}
                        width="60"
                        height="60"
                    />
                </Navbar.Brand>

                {/* Navbar toggle for smaller screens */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{
                        borderColor: scrolling ? 'white' : 'black',
                    }}
                />

                {/* Navbar links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-dark">
                        <Nav.Link as={Link} to={routes.home} style={{color: scrolling ? 'white' : 'black'}}>Home</Nav.Link>
                        <Nav.Link as={Link} to={routes.about} style={{color: scrolling ? 'white' : 'black'}}>About Us</Nav.Link>

                        <NavDropdown
                            title='Alumni'
                            id="basic-nav-dropdown"
                            className={dropdownClass}
                        >
                            <NavDropdown.Item as={Link} to={routes.alumniDirectory}>Alumni Directory</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={routes.registration}>Join Alumni</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
