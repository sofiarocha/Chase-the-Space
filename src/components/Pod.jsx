/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-one-expression-per-line */
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
            <div onClick={handleClick} role="presentation">
                <p className="pod-description">
                    // eslint-disable-next-line react/jsx-one-expression-per-line
                    {apod.date} <br /> {apod.title}
                </p>
                <YouTube videoId={apod.url.replace("https://www.youtube.com/embed/", "")} opts={opts} key={apod.title} />
            </div>
        );
    }
    return (
        <div onClick={handleClick} role="presentation">
            <p className="pod-description">
                {apod.date} <br /> {apod.title}
            </p>
            <img src={apod.hdurl} alt={apod.title} key={apod.title} />
        </div>
    );
};

export default Pod;
