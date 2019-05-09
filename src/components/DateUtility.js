class DateUtility {
    constructor(date) {
        this.date = date;
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        const month = this.date.getMonth() + 1;
        if (month < 10) {
            return `0${month}`;
        } return month;
    }

    dayOfMonth() {
        const dayOfMonth = this.date.getDate();
        if (dayOfMonth < 10) {
            return `0${dayOfMonth}`;
        } return dayOfMonth;
    }

    formatedDate = () => {
        return `${this.year()}-${this.month()}-${this.dayOfMonth()}`;
    }
}

export default DateUtility;
