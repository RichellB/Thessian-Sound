import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {Switch, Route} from 'react-router-dom';


import {
    BrowserRouter as Router,
    Link, NavLink
  } from "react-router-dom";
  import Account from './Account';

const NavBar = () => {
    return(
      <div className="header">
        <div className="NavBar">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark"variant="dark" >
    <ReactBootStrap.Navbar.Brand href="#home"></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/beatstore">
    <ReactBootStrap.Nav.Link href="#beatstore">Beats Store</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="Pricing" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Services</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>   
      <ReactBootStrap.NavDropdown title="Mixing/Mastering" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Mixing</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Mastering</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Bundle Deals</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <Link to="/about">
    <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/contact-us">
    <ReactBootStrap.Nav.Link href="#contact">Contact Us</ReactBootStrap.Nav.Link>
    </Link> 
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <NavLink to="/cart">
    <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
    </NavLink>
    <Link to="/account">
    <ReactBootStrap.Nav.Link eventKey={2} href="#account">
       Account
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
        </div>
    )
}

export default NavBar;