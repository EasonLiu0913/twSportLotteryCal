import React from 'react';

export default function CalResult(props) {
    const { cardTitle, isBet, tatalReward } = props.data;

    return (
        <div
            className={`accordion-collapsecal-result-card m-2 m-md-0 mb-md-2 text-center border ${
                tatalReward > 0 ? 'bg-light' : 'bg-dark text-light'
            }`}
            style={{ minWidth: '60px' }}
        >
            <p className="m-0">{cardTitle}</p>
            <p className={`m-0`}>{parseInt(tatalReward)}</p>
        </div>
    );
}
