import React from "react";
import {Link} from "react-router-dom";
import {Collapse, Nav, Navbar} from "react-bootstrap";

const Sidebar = () => {
  return (
      <div className={"col-auto col-md-3 col-xl-2 px-sm-2 px-0"}>
          <div >
                <Navbar.Brand as={Link} to="/" className={"d-flex"}>
                    <span className={"fs-5 d-none d-sm-inline"}>Menu</span>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <i></i>
                            <span>Home</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <i>
                            </i>
                            <span>
                                Dashboard
                            </span>
                        </Nav.Link>
                        <Collapse>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span>Item</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span>Item</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Collapse>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <span>Item</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
          </div>
          <ul>
              <li>Dashboard</li>
              <li>Alumni Directory</li>
              <li>Event Management</li>
              <li>Registrations</li>
              <li>Settings</li>
          </ul>



      </div>
  )
};


export default Sidebar;