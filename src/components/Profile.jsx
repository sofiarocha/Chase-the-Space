import React, { Fragment } from 'react';

const Profile = (props) => {

    return (
        <div className="card profileCard ">
            <div className="card-img-top">
                <img className="profileImage" src={props.photo} alt=""/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a target="_blank" href={props.github}>
                    <i className="fab fa-github-square fa-lg"></i>
                </a>
                <a className="profileSocial" target="_blank"  href={props.linkedin}>
                    <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
            </div>
        </div>
    )
} 
export default Profile;

