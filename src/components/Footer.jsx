import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container bg-dark footerComponent  ">
            <div> ChaseTheSpace@2019 made by &nbsp;&nbsp;
                <Link to="/about">
                Us
                </Link>
                &nbsp;&nbsp; at &nbsp;&nbsp; <a href="https://wildcodeschool.com/"> Wild Code School</a>
            </div>

        </footer>
 );
};
export default Footer;

