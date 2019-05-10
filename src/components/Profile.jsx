/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Profile = (props) => {
    // eslint-disable-next-line object-curly-newline
    const { photo, name, description, github, linkedin } = props;
    return (
        <div className="card profileCard ">
            <div className="card-img-top">
                <img className="profileImage" src={photo} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a target="_blank" href={github}>
                    <i className="fab fa-github-square fa-lg" />
                </a>
                <a className="profileSocial" target="_blank" href={linkedin}>
                    <i className="fab fa-linkedin-in fa-lg" />
                </a>
            </div>
        </div>
    );
};
export default Profile;
