import React, {PropTypes} from 'react'

const MonthName = (props) => {
    let monthNames = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'Jule',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
       <div className="col-lg-6 montName"> <h3>{ monthNames[props.date.getMonth()] + ' ' + props.date.getFullYear() }</h3></div>
    );
}

MonthName.propTypes = {
    date: PropTypes.object.isRequired
};


export default MonthName