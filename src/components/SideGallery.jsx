import React, { Fragment, Component } from 'react';
import YouTube from 'react-youtube';

class SideGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekApod: []
        };
    }

    orderByDays = (arr) => {
        return arr.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }

    render () {
        const opts = {
            width: '100%',
            playerVars: {
                autoplay: 1
            }
        };
        const { weekApod } = this.props;
        const weekApodOrder = this.orderByDays(weekApod);
        return (
            <Fragment>
                {weekApodOrder.map((apod) => {
                    if (apod.media_type === "video") {
                        return <YouTube videoId={apod.url.replace("https://www.youtube.com/embed/", "")} opts={opts} key={apod.title} />;
                    }
                    return <img src={apod.hdurl} alt={apod.title} key={apod.title} />;
                })}
            </Fragment>
        );
    }
}

export default SideGallery;
