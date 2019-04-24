import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark nav-pills nav-justified">
                <a className="navbar-brand text-white" href="#">
                <img src="DarkPlanetIcon.jpg" width="50" height="50" className="d-inline-block" alt=""/>
                ChaseTheSpace
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link active text-white" href="">HOME<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="">ISS</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="">APOD</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        );
    }
   
};

export default Navbar;
