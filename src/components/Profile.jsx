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
                <a href={props.github}>
                    <i class="fab fa-github-square"></i>
                </a>
                <a href={props.linkedin}>
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    )
}
export default Profile;

