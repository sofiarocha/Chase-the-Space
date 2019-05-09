import React from 'react';
import YouTube from 'react-youtube';
import MoreInfoButton from './MoreInfoButton';

const opts = {
    height: '100%',
    width: '100%',
};

const SelectedPod = ({ selectedPod }) => {
    console.log(selectedPod);
    const podStyle = {
        background: `center / contain no-repeat url("${selectedPod.url}")`
    };
    return (
        <div className="pod">
            {selectedPod.media_type === "video"
                ? (
                    <div className="video-pod">
                        <YouTube videoId={selectedPod.url.replace("https://www.youtube.com/embed/", "")} opts={opts} />
                    </div>
                )
                : <div className="image-pod" style={podStyle} /> }
            <MoreInfoButton pod={selectedPod} />
        </div>
    );
};

export default SelectedPod;
