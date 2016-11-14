import React, {PropTypes} from 'react';

class TimePeriod extends React.Component {
    render() {
        return <div className="col-lg-4" style={{paddingRight: '0px'}}>
            <button  type="button" className="btn btn-default">Day </button>
            <button  type="button" className="btn btn-default">Week </button>
            <button  type="button" className="btn btn-default">Month </button>
        </div>
    }

}

export default TimePeriod;