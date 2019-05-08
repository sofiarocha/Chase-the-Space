import React, { Component } from 'react';

class MoreInfoButton extends Component {
    return (
        <button onClick={this.handleClick} type="button">
            {onMoreInfo ? <i className="fas fa-chevron-up">
            <br />Hide info</i> : <i className="fas fa-chevron-down"><br />Show info</i>}
        </button>
        {onMoreInfo
            && <p>{pictureOfDay.explanation}</p>}
    );
}

export default MoreInfoButton;
