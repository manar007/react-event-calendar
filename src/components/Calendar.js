import React from 'react';
import CalHeading from './CalHeading'
import CalendarTable from './CalendarTable'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createNewEvent} from '../actions/actionCreators';


class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.currentDate = this.getCurrentDate();
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.getCurrentDate = this.getCurrentDate.bind(this);
        this.today = this.today.bind(this);


        this.state = {currentDate: this.currentDate, events: props.events};
        
        console.log(props);

    }

    render() {
        return <div className="col-lg-12">
            <div className="calendarWrapper col-md-offset-3  col-lg-6">
                <CalHeading date={this.state.currentDate}
                            actions={{nextMonth: this.nextMonth, prevMonth: this.prevMonth, today: this.today}}/>
                <CalendarTable date={this.state.currentDate} getCurrentDate={this.getCurrentDate}
                               events={this.state.events}/>
            </div>
        </div>
    }

    getCurrentDate() {
        return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    }

    nextMonth() {
        let newDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
        this.setState({currentDate: newDate});
    }

    prevMonth() {
        let newDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
        this.setState({currentDate: newDate});
    }

    today() {
        let newDate = this.getCurrentDate();
        this.currentDate = newDate;
        this.setState({currentDate: newDate});
    }

    

}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}


/*function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(createNewEvent, dispatch)
    };
}*/

export default connect(
    mapStateToProps

)(Calendar);