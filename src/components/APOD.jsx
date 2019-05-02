import React, { Component } from 'react';
import SideGallery from './SideGallery';

class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureOfDay: {},
            moreInfo: false
        };
    }

    componentDidMount = () => {
        this.onShowPictureOfDay();
    }

    onShowPictureOfDay = () => {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt";
        fetch(apodUrl)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    pictureOfDay: data
                });
            });
    }

    handleClick = () => {
        this.setState((state) => {
            return { moreInfo: !state.moreInfo };
        });
    }

    render () {
        const { pictureOfDay, moreInfo } = this.state;
        const podStyle = {
            background: `center / cover no-repeat url(${pictureOfDay.url})`
        };
        return (
            <div className="apod-page">
                <div className="pod" style={podStyle}>
                    <button onClick={this.handleClick} type="button">{moreInfo ? "Hide info" : "Show info"}</button>
                    {moreInfo
                    && <p>{pictureOfDay.explanation}</p>
                    }
                </div>
                <div className="week-pictures">
                    <SideGallery />
                </div>
            </div>
        );
    }
}

export default APOD;
