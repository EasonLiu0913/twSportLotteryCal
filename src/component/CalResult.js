import React from 'react';

export default function CalResult(props) {
    const { cardTitle, isBet, tatalReward } = props.data;

    return (
        <div
            className="accordion-collapsecal-result-card bg-white mx-2 text-center border"
            style={{ minWidth: '60px' }}
        >
            <p className="m-0">{cardTitle}</p>
            <p className="m-0">{tatalReward + ''}</p>
        </div>
    );
}
