import React, {PropTypes} from 'react'
import {generate as shortIdGenerate} from 'shortid';



const CalRow = (props) => {
    const drawCells = () => {
        let cells = props.cells.map((d, index) => {
            let event;
            if(d.eventData) {
                event = d.eventData.map(e => {
                    let classAttr = e === ' ' ? 'event empty-event' : 'event';
                    return <div key={shortIdGenerate()} className={classAttr} title={e}>{e}</div>
                })
            }
            return <td key={shortIdGenerate()}>
                <span className={d.customClass}>{d.day}</span>
                {event}
            </td>
        });
        return cells;
    };
    return (
        <tr>
            {drawCells()}
        </tr>
    );

};

CalRow.propTypes = {
    cells: PropTypes.array.isRequired
};


export default CalRow
