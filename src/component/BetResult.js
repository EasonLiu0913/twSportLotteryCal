import React from 'react';

export default function BetResult(props) {
    // console.log('props', props);
    const { handleBetRateChange, data, betId } = props;
    const { targetName, sortName, rateValue, isVisible } = data;

    return (
        <>
            <div
                className="bet-card bg-white mt-2 p-2"
                style={isVisible === 1 ? { opacity: 1 } : { opacity: 0.5 }}
            >
                <div className="d-flex justify-content-between">
                    <p className="m-0">{targetName}</p>

                    <input
                        defaultValue={rateValue}
                        size="5"
                        onChange={handleBetRateChange}
                        data-bet-id={betId}
                        data-target="rateValue"
                    />
                </div>

                <div className="d-flex">
                    <p className="m-0 me-auto">{sortName}</p>
                    <div className="icons ">
                        {isVisible ? (
                            <i
                                className={`fa-solid fa-eye me-2 text-success`}
                                onClick={handleBetRateChange}
                                data-bet-id={betId}
                                data-target="isVisible"
                                data-value={isVisible}
                            ></i>
                        ) : (
                            <i
                                className={`fa-solid fa-eye-slash me-2 text-success`}
                                onClick={handleBetRateChange}
                                data-bet-id={betId}
                                data-target="isVisible"
                                data-value={isVisible}
                            ></i>
                        )}

                        <i
                            class="fa-solid fa-trash text-danger"
                            onClick={handleBetRateChange}
                            data-bet-id={betId}
                            data-target="delete"
                        ></i>
                    </div>
                </div>
            </div>
        </>
    );
}
