import React from 'react'

const WeekNames = () => {
    const weekNames = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    const tHead = () => {
        let rowsHtml = weekNames.map((name)=> {
            return <th key={name}>{name}</th>;
        });
        return <tr>{rowsHtml}</tr>;
    };
    return (
        <thead>{tHead()}</thead>
    );
};


export default WeekNames