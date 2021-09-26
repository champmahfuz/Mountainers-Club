import React from 'react';
import './Hire.css';

const Hire = (props) => {
    const { hire } = props;
    let total = 0;
    for (const profile of hire) {
        total = total + profile.salary;

    }

    return (
        <div>
            <h3>Hire Summery</h3>
            <h5>Mountainer Added: {props.hire.length}</h5>
            <br />
            <p>Total Cost: <span>$</span>{total}</p>
        </div>
    );
};

export default Hire;