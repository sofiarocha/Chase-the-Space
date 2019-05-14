import React from 'react';
import YouTube from 'react-youtube';

const opts = {
    width: '100%',
    playerVars: {
        autoplay: 1
    }
};

const Pod = ({ apod, handleCkickPod }) => {
    const handleClick = () => handleCkickPod(apod);
    if (apod.media_type === "video") {
        return (
            <div className="week-pod" onClick={handleClick} role="presentation">
                <p className="pod-description">
                    {apod.date} 
                    <br />
                    {apod.title}
                </p>
                <YouTube videoId={apod.url.replace("https://www.youtube.com/embed/", "")} opts={opts} key={apod.title} />
            </div>
        );
    }
    return (
        <div className="week-pod" onClick={handleClick} role="presentation">
            <p className="pod-description">
                {apod.date}
                <br />
                {apod.title}
            </p>
            <img src={apod.hdurl} alt={apod.title} key={apod.title} />
        </div>
    );
};

export default Pod;
