import React, { Component } from 'react';

class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureOfDay: "https://apod.nasa.gov/apod/image/1904/M33Meteor_Chokshi_960.jpg"
        };
    }

    componentDidMount = () => {
        this.onShowPictureOfDay();
    }

    onShowPictureOfDay = () => {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt";
        fetch(apodUrl)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render () {
        const podStyle = {
            backgroundImage: `url(${this.state.pictureOfDay})`
        };
        return (
            <div>
                <div className="pod" style={podStyle} />
            </div>
        );
    }
};

export default APOD;
