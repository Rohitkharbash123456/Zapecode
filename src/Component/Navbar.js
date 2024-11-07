import React from "react";
import './Navbar.css';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarmain = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg  gradient1">
                <a class="navbar-brand siteicon" href="#">Zapecode</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/AboutFinal">About Us</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/ServicesFinal">Services</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/ContactFinal">Contact Us</Link>
                        </li>

                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Our Products"
                                    style={{ fontSize: "17px" }}
                                >
                                    <NavDropdown.Item>
                                        <Link class="nav-link" to="/ProductFinal">Print-Bills</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link class="nav-link" to="/Castleclass">Castleclass</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>

                    </ul>



                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Navbarmain;