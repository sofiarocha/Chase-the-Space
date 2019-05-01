import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Profile = (props) => {
    console.log(props);
    console.log('blabla');
    console.log('blabla');
    console.log('blabla');
    console.log('blabla');
    console.log('blabla');
    console.log('blabla');
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="card hovercard">
                        <div className="avatar">
                            <img alt="" src={props.photo}/>
                        </div>
                        <div classNameName="info">
                            <div class="title">{props.name}</div>
                            <div classNameName="desc">{props.description}</div>
                        </div>
                        <div className="bottom">
                            <a className="btn btn-primary btn-linkedin btn-sm" href={props.linkedin}>
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="btn btn-primary btn-github btn-sm" href={props.github}>
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

