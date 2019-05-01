import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-100 footer bg-dark pt-4">
            <div className="container">
                <div className="row">
                    <div className="col" >
                        <p> ChaseTheSpace@2019 made by &nbsp;&nbsp;
                            <Link to="/about">
                            Us
                            </Link>
                            &nbsp;&nbsp; at &nbsp;&nbsp; <a href="https://wildcodeschool.com/"> Wild Code School</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
 );
};
export default Footer;

