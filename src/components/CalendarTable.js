import React, {PropTypes} from 'react';
import WeekNames from './WeekNames';
import CalRow from './CalRow';

class CalendarTable extends React.Component {
    constructor(props) {
        super(props);
        this.NUMBER_OF_WEEKS = 6;
        this.init(props);
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }

    init(props) {
        console.log(props);
        this.startDay = 1;
        this.firstDay = props.date || props.date;
        this.nextMonthClass = '';
        this.lastDay = new Date(this.firstDay.getFullYear(), this.firstDay.getMonth() + 1, 0);
        this.eventsList = {};
        props.events.map(event => this.aggregateEventDays(event));

        console.log('event list ', this.eventsList);
    }

    aggregateEventDays(event) {
        let start = new Date(event.from);
        let end = new Date(event.to);
        let id = null;

        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            let key = d.getMonth() + '_' + d.getDate();
            let desc = (id !== event.id) ? event.description : ' ';
            if (this.eventsList[key]) {
               this.eventsList[key].push(desc);
            }
            else {
                this.eventsList[key] = [desc];
            }
            id = event.id;
        }
    }


    render() {
        return <div className="col-lg-12">
            <table width="100%" className="table-bordered">
                <WeekNames />
                <tbody>
                {this.drawRows()}
                </tbody>
            </table>

        </div>
    }

    drawRows() {
        let rows = [];
        for (let i = 0; i < this.NUMBER_OF_WEEKS; i++) {
            let cells = this.getCells(i);
            rows.push(<CalRow key={i + '-calrow'} cells={cells}/>)
        }
        return rows;
    }

    getCells(rowNumber) {
        const FIRST_WEEK = 0;
        let output = [];

        if (rowNumber === FIRST_WEEK) {
            this.fillFirstWeekDays(output);
        } else {
            for (let i = 1; i <= 7; i++) {
                // end days of current month
                if (this.startDay > this.lastDay.getDate()) {
                    this.startDay = 1;
                    this.nextMonthClass = 'next-month';
                    this.fillDay(output, this.nextMonthClass);
                }
                else {
                    this.fillDay(output, this.nextMonthClass);
                }
            }
        }
        return output;

    }

    fillDay(output, customClass) {
        if (this.isToday() && !customClass) {
            customClass = 'today';
        }
        output.push({day: this.startDay, customClass: customClass, eventData: this.isEventDay()});
        this.startDay++;
    }

    isToday() {
        return this.startDay === new Date().getDate()
            && this.firstDay.getMonth() === this.props.getCurrentDate().getMonth()
            && this.firstDay.getFullYear() === this.props.getCurrentDate().getFullYear();
    }

    isEventDay() {
        let month = (this.nextMonthClass) ? this.firstDay.getMonth() + 1 : this.firstDay.getMonth();
        let key = month + '_' + this.startDay;

        return this.eventsList[key] || null;
    }


    fillFirstWeekDays(output) {
        let startDayOfMonth = this.firstDay.getDay();
        if (startDayOfMonth !== 0) {
            for (let i = 1; i <= 7; i++) {
                if (i <= startDayOfMonth) {
                    output.push({day: ''})
                } else {
                    this.fillDay(output);
                }
            }
        } else {
            for (let i = 1; i <= 7; i++) {
                this.fillDay(output);
            }
        }
    }

}

CalendarTable.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array,
    getCurrentDate: PropTypes.func
};

CalendarTable.defaultProps = {};

export default CalendarTable;