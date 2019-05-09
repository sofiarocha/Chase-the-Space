import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { ClapSpinner } from "react-spinners-kit";
import SideGallery from './SideGallery';
import MoreInfoButton from './MoreInfoButton';


class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureOfDay: {},
            isLoading: false
        };
    }

    onShowPictureOfDay = () => {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt";
        fetch(apodUrl)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pictureOfDay: data,
                    isLoading: false,
                });
            });
    }

    componentDidMount = () => {
        this.onShowPictureOfDay();
        this.setState({ 
            isLoading: true
          });
    }

    render () {
        const { pictureOfDay } = this.state;
        const opts = {
            height: '100%',
            width: '100%',
        };
        const podStyle = {
            background: `center / contain no-repeat url("${pictureOfDay.url}")`
        };
        return (
            <div className="apod-page">
                <div className="pod">
                    <div className="spinner">
                        {this.state.isLoading && <ClapSpinner
                            size={50}
                            color="#686769"
                            loading={this.state.isLoading}
                        /> }
                        </div>
                        {pictureOfDay.media_type === "video" && !this.state.isLoading
                            ? (
                                <div className="video-pod">
                                    <YouTube videoId={pictureOfDay.url.replace("https://www.youtube.com/embed/", "")} opts={opts} />
                                </div>
                            )
                            : <div className="image-pod" style={podStyle} /> }
                        <MoreInfoButton pod={pictureOfDay} />
                </div>
                <div className="week-pictures">
                    <SideGallery />
                </div>
            </div>
        );
    }
}

export default APOD;
