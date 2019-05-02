import React, { Fragment, Component } from 'react';

const getWeekDates = () => {
    const weekDaysDate = [1, 2, 3, 4, 5, 6, 7];
    
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);
    const formattedDate = `${new Date(yesterday).getFullYear()}-${new Date(yesterday).getMonth() + 1}-${new Date(yesterday).getDate()}`;
    console.log(formattedDate);
};


class SideGallery extends Component {
  componentDidMount = () => {
      getWeekDates();
  }

  render () {
      return (
          <Fragment>
              <img src="https://apod.nasa.gov/apod/image/1905/CatsEye_HubblePohl_960.jpg" alt="" />
              <img src="https://apod.nasa.gov/apod/image/1904/M33Meteor_Chokshi_960.jpg" alt="" />
              <img src="https://apod.nasa.gov/apod/image/1904/N11_Hubble_960.jpg" alt="" />
              <img src="https://youtu.be/DmYK479EpQc" alt="" />
              <img src="https://apod.nasa.gov/apod/image/1904/pia23122c-16_1067.jpg" alt="" />
              <img src="https://apod.nasa.gov/apod/image/1904/FairbairnCROSSTOCARINA.jpg" alt="" />
          </Fragment>
      );
  }
}

export default SideGallery;
