import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark nav-pills nav-justified">
                <NavLink exact to="/" className="navbar-brand text-white"><img src="DarkPlanetIcon.jpg" width="50" height="50" className="d-inline-block" alt=""/>ChaseTheSpace</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <NavLink exact to="/" className="nav-link text-white">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/iss" className="nav-link text-white">ISS</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/apod" className="nav-link text-white">APOD</NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        );
    }
   
};

export default Navbar;
