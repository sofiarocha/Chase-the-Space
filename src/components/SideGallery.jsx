import React, { Fragment } from 'react';
import Pod from './Pod';

const orderByDays = (arr) => {
    return arr.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
};

const SideGallery = ({ weekApod, handleCkickPod }) => {
    const weekApodOrder = orderByDays(weekApod);
    return (
        <Fragment>
            {weekApodOrder.map(apod => (
                <Pod
                    apod={apod}
                    handleCkickPod={handleCkickPod}
                    key={apod.title}
                />
            ))}
        </Fragment>
    );
};

export default SideGallery;
