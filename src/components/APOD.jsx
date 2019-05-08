/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import SideGallery from './SideGallery';

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
                    <div className="video-pod">
                        <YouTube videoId={pictureOfDay.url.replace("https://www.youtube.com/embed/", "")} opts={opts} />
                        <button onClick={this.handleClick} type="button">
                            {
                                moreInfo
                                    ? <i className="fas fa-chevron-up"><br />Hide info</i>
                                    : <i className="fas fa-chevron-down"><br />Show info</i>
                            }
                        </button>
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
        return (
            <div className="apod-page">
                <div className="pod" style={podStyle}>
                    <button onClick={this.handleClick} type="button">
                        {moreInfo ? <i className="fas fa-chevron-up">
                        <br />Hide info</i> : <i className="fas fa-chevron-down"><br />Show info</i>}
                    </button>
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
