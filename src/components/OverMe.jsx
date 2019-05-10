/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';


class OverMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passtime: 0
        };
    }

    componentDidMount = () => {
        this.handlePosition();
        this.getMilli();
    }

    handlePosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const fetchUrl = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`;
            fetch(proxyUrl + fetchUrl)
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        passtime: data.response[0].risetime * 1000
                    });
                });
        });
    }

    getMilli = (milli) => {
        const time = new Date(milli);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        if (minutes < 10) {
            return `${hours}:${0}${minutes}`;
        }
        if (hours < 10) {
            return `${hours}:${minutes} AM`;
        }
        return `${hours}:${minutes}`;
    }

    render() {
        const { passtime } = this.state;
        return (
            <div className="container flex text">
                <p>
                    The next time the International Space Station will be over me will be at
                    <span className="time">{this.getMilli(passtime)}</span>
                </p>
                <div className="fb-share-button" data-href="https://sofiarocha.github.io/Chase-the-Space/" data-layout="button_count" data-size="small">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsofiarocha.github.io%2FChase-the-Space%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a>
                </div>
            </div>
        );
    }
}

export default OverMe;
