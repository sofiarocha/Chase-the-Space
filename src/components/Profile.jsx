import React, { Fragment } from 'react';

const Profile = (props) => {

    return (
        <div className="card">
            <div className="card-img-top">
                <img src={props.photo} alt=""/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a className="btn btn-primary btn-linkedin btn-sm" href={props.linkedin}>
                    <i className="fa fa-linkedin"></i>
                </a>
                <a className="btn btn-primary btn-github btn-sm" href={props.github}>
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Profile;

