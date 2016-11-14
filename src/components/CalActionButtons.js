import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CalActionButtons = ({actions}) => {
        return <div className="col-lg-6">
            <button type="button" className="btn btn-default" onClick={actions.prevMonth}><i className="glyphicon glyphicon-arrow-left"></i>
            </button>
            <button type="button" className="btn btn-default" onClick={actions.nextMonth}><i className="glyphicon glyphicon-arrow-right"></i>
            </button>
            <button type="button" className="btn btn-default" onClick={actions.today}>Today</button>


            <button type="button" className="btn btn-primary"><Link style={{color: 'white'}} to={`/create-event`}>Create event</Link></button>

        </div>
};

CalActionButtons.propTypes = {
    actions: PropTypes.object
};

export default CalActionButtons;