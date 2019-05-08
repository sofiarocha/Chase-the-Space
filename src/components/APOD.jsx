import React, { Component } from 'react';
import YouTube from 'react-youtube';
import SideGallery from './SideGallery';
import MoreInfoButton from './MoreInfoButton';

class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureOfDay: {},
            moreInfo: false
        };
    }

    onShowPictureOfDay = () => {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt";
        fetch(apodUrl)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pictureOfDay: data
                });
            });
    }

    componentDidMount = () => {
        this.onShowPictureOfDay();
    }

    handleClick = () => {
        this.setState((state) => {
            return { moreInfo: !state.moreInfo };
        });
    }

    render () {
        const { pictureOfDay, moreInfo } = this.state;
        const opts = {
            height: '100%',
            width: '100%',
        };
        const podStyle = {
            background: `center / cover no-repeat url("${pictureOfDay.url}")`
        };
        if (pictureOfDay.media_type === "video") {
            return (
                <div className="apod-page">
                    <div className="pod">
                        <YouTube videoId={pictureOfDay.url.replace("https://www.youtube.com/embed/", "")} opts={opts} />
                        <MoreInfoButton onMoreInfo={moreInfo} />
                    </div>
                    <div className="week-pictures">
                        <SideGallery />
                    </div>
                </div>
            );
        }
        return (
            <div className="apod-page">
                <div className="pod" style={podStyle}>
                    <MoreInfoButton onMoreInfo={moreInfo} />
                </div>
                <div className="week-pictures">
                    <SideGallery />
                </div>
            </div>
        );
    }
}

export default APOD;
