/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, Fragment } from 'react';

class MoreInfoButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onMoreInfo: false
        };
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                onMoreInfo: !state.onMoreInfo
            };
        });
    }

    render () {
        const { onMoreInfo } = this.state;
        const { pod } = this.props;
        return (
            <Fragment>
                <button className="btn btn-link text-white" onClick={this.handleClick} type="button">
                    {onMoreInfo
                        ? (
                            <i className="fas fa-chevron-down">
                                <br />
                                Hide info
                            </i>
                        )
                        : (
                            <i className="fas fa-chevron-up">
                                <br />
                                Show info
                            </i>
                        )}
                </button>
                {onMoreInfo
                    && (
                        <p className="expanded-mobile">
                            {pod.date} - {pod.title}
                            <br />
                            {pod.explanation}
                        </p>
                    )}
            </Fragment>
        );
    }
}

export default MoreInfoButton;
