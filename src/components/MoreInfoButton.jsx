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
            return { onMoreInfo: !state.onMoreInfo };
        });
    }

    render () {
        const { onMoreInfo } = this.state;
        const { pod } = this.props;
        return (
            <Fragment>
                <button className="btn btn-link" onClick={this.handleClick} type="button">
                    {onMoreInfo
                        ? (
                            <i className="fas fa-chevron-up">
                                <br />
                                Hide info
                            </i>
                        )
                        : (
                            <i className="fas fa-chevron-down">
                                <br />
                                Show info
                            </i>
                        )}
                </button>
                {onMoreInfo
                    && <p>{pod.explanation}</p>}
            </Fragment>
        );
    }
}

export default MoreInfoButton;
