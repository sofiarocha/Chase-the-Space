import React, { Component } from 'react';


class OverMe extends Component {
    position = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            fetch(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`)
                .then(response => response.json()) 
                .then(data => {
                    console.log(data);
                });
        });
    }
        render(){
            return (
                <div className="container">
                    <h5>The International Space Station will be over me in 5 minutes</h5>
                    <div class="fb-share-button" data-href="https://sofiarocha.github.io/iss" data-layout="box_count" data-size="small">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsofiarocha.github.io%2FChase-the-Space%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
                    </div>
                </div>
            );
        }
};

export default OverMe;