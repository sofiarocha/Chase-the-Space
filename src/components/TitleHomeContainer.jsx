import React, { Fragment } from 'react';

const TitleHomeContainer = ({ handleScroll }) => {
    return (
        <Fragment>
            <h1>Chase the Space</h1>
            <h5>“The universe seems neither benign nor hostile, merely indifferent.”</h5>
            <p className="carl"> - Carl Sagan</p>
            <div className="scroller">
                <button className="btn btn-link text-white" onClick={handleScroll} type="button">
                    <i className="fas fa-chevron-down" />
                </button>
            </div>
        </Fragment>
    );
};

export default TitleHomeContainer;
