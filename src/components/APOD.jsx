import React, { Component } from 'react';
import { ClapSpinner } from "react-spinners-kit";
import SideGallery from './SideGallery';
import DateUtility from './DateUtility';
import SelectedPod from './SelectedPod';

const today = new Date();
const getWeekDates = () => {
    const weekDays = [0, 1, 2, 3, 4, 5, 6];
    const todayDay = today.getTime();
    const weekDaysDate = weekDays.map((day) => {
        const week = (todayDay - day * 24 * 60 * 60 * 1000);
        return new DateUtility(new Date(week)).formatedDate();
    });
    return weekDaysDate;
};


class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPod: {},
            weekApod: [],
            isLoading: true
        };
    }

    onShowWeekGallery = () => {
        getWeekDates().forEach((date) => {
            const dayUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt`;
            fetch(dayUrl)
                .then(response => response.json())
                .then((data) => {
                    this.setState((state) => {
                        return {
                            weekApod: [...state.weekApod, data],
                            isLoading: false
                        };
                    });
                    if (data.date === new DateUtility(today).formatedDate()) {
                        this.setState({ selectedPod: data });
                    }
                });
        });
    }

    componentDidMount = () => {
        this.onShowWeekGallery();
        this.setState({
            isLoading: true
        });
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.weekApod.length === 7;
    }

    onMarkAsClick = (selectedPod) => {
        this.setState({ selectedPod });
    }

    render () {
        const { selectedPod, weekApod } = this.state;
        return (
            <div className="apod-page">
                <div className="spinner">
                            {this.state.isLoading && <ClapSpinner
                                size={50}
                                color="#686769"
                                loading={this.state.isLoading}
                            /> }
                            </div>
                <SelectedPod selectedPod={selectedPod} />
                <div className="week-pictures">
                    <SideGallery
                        weekApod={weekApod}
                        selectedPod={selectedPod}
                        handleCkickPod={this.onMarkAsClick}
                    />
                </div>
            </div>
        );
    }
}

export default APOD;
