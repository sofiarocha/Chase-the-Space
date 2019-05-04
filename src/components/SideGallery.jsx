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
    constructor(props) {
        super(props);
        this.state = {
            weekApod: []
        };
    }

    onShowWeekGallery = () => {
        getWeekDates().forEach((date) => {
            const dayUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt`;
            fetch(dayUrl)
                .then(response => response.json())
                .then((data) => {
                    this.setState((state) => {
                        return { weekApod: [...state.weekApod, data] };
                    });
                });
        });
    }

    componentDidMount = () => {
        this.onShowWeekGallery();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.weekApod.length === 6;
    }

    orderByDays = (arr) => {
        return arr.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }

    render () {
        const { weekApod } = this.state;
        const weekApodOrder = this.orderByDays(weekApod);
        return (
            <Fragment>
                {weekApodOrder.map((apod) => {
                    if (apod.media_type === "video") {
                        return <video src={apod.url} key={apod.title}/>;
                    }
                    return <img src={apod.hdurl} alt={apod.title} key={apod.title} />;
                })}
            </Fragment>
        );
    }
}

export default SideGallery;
