import React, { Fragment } from 'react';

const TitleHomeContainer = ({ handleScroll }) => {
    return (
        <Fragment>
            <h1>Chase the Space</h1>
            <div className="scroller">
                <button className="btn btn-link" onClick={handleScroll} type="button">
                    <i className="fas fa-chevron-down" />
                    <br />
                        Scroll
                </button>
            </div>
        </Fragment>
    );
};

export default TitleHomeContainer;
