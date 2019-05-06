import React, { Component } from 'react';


class OverMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            passtime: 0
        };
    }

    componentDidMount = () => {
        this.position();
    }
    position = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const fetchUrl = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`;
            fetch(proxyUrl + fetchUrl)
                .then(response => response.json()) 
                .then(data => {
                    this.setState ({
                        passtime: data.response[0].risetime
                    });
                });
                let newDate = new Date();
                newDate.setTime(this.state.passtime*1000);
        });
    }
        render(){
            return (
                <div className="container">
                    <h5>{`The International Space Station will be over me in ${this.state.passtime} minutes`}</h5>
                    <div className="fb-share-button" data-href="https://sofiarocha.github.io/iss" data-layout="box_count" data-size="small">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsofiarocha.github.io%2FChase-the-Space%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a>
                    </div>
                </div>
            );
        }
};

export default OverMe;