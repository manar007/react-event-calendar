import React, {PropTypes} from 'react'

import CalActionButtons from './CalActionButtons';
import  MonthName from './MonthName'

const CalHeading = ({actions, date}) => {
    return (
        <div className="cal-header col-lg-12 row">
            <CalActionButtons actions={actions}/>
            <MonthName date={date}/>
        </div>
    );
};

CalHeading.propTypes = {
  actions: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired
};

export default CalHeading