import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footerHeight bg-dark">

            <p> ChaseTheSpace@2019 made by &nbsp;&nbsp;
                <Link to="/about">
                Us
                </Link>
                &nbsp;&nbsp; at &nbsp;&nbsp; <a href="https://wildcodeschool.com/"> Wild Code School</a>
            </p>

        </footer>
 );
};
export default Footer;

