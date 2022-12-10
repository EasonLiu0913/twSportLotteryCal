import React from 'react';

export default function CalResult(props) {
    const { cardTitle, isBet, tatalReward } = props.data;

    return (
        <div
            className="accordion-collapsecal-result-card bg-white mx-2 text-center border"
            style={{ minWidth: '100px' }}
        >
            <p>{cardTitle}</p>
            <p>{tatalReward + ''}</p>
        </div>
    );
}
