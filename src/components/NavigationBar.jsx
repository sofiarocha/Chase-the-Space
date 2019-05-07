import React, { Component } from 'react';
import { NavLink, Link} from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
  } from "react-bootstrap";


class NavigationBar extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
              <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand> 
                  <NavLink exact to="/" className="navbar-brand text-white"><img src="DarkPlanetIcon.jpg" width="50" height="50" className="d-inline-block" alt=""/>ChaseTheSpace</NavLink>
                </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto links">
                        <NavLink exact to="/" className="nav-link text-white activeStyle">HOME</NavLink>
                        <NavLink to="/iss" className="nav-link text-white">ISS</NavLink>
                        <NavLink to="/apod" className="nav-link text-white">APOD</NavLink>
                      </Nav>
                      <Nav className="aboutuslink">
                        <Link to="/about">About Us</Link>
                      </Nav>
                    </Navbar.Collapse>
              </Navbar>
            </div>
                );
            }
   
};
export default NavigationBar;


