import React from 'react';



const OverMe = () => {
    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        })
    }
    return (
        <div className="container">
            <h1>ISS</h1>
            <p>The International Space Station will be over me in 5 minutes</p>
            <button onClick={handleCurrentLocation()}>Share</button>
        </div>
    );
};

export default OverMe;