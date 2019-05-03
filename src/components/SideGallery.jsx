import React, { Fragment, Component } from 'react';

const getWeekDates = () => {
    const weekDays = [1, 2, 3, 4, 5, 6];
    const today = new Date();
    const todayDay = today.getTime();
    const weekDaysDate = weekDays.map((day) => {
        const week = (todayDay - day * 24 * 60 * 60 * 1000);
        return `${new Date(week).getFullYear()}-${new Date(week).getMonth() + 1}-${new Date(week).getDate()}`;
    });
    return weekDaysDate;
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
