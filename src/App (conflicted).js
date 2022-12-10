import logo from './logo.svg';
import './App.css';
import bootstrap from './bootstrap-5.2.3-dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import BetResult from './component/BetResult';
import CalResult from './component/CalResult';

function App() {
    const [betResultObj, setBetResultObj] = useState([]);

    const [betTotal, setBetTotal] = useState(0);
    const [betAmount, setBetAmount] = useState(5);

    const [calDrawResultArray, setCalDrawResultArray] = useState([]);
    const [drawResultCheckObj, setDrawResultCheckObj] = useState({
        '0:0': [2, 34, 35, 38, 44, 48, 85, 123],
        '1:1': [2, 33, 36, 40, 45, 49, 86, 123],
        '2:2': [2, 33, 37, 42, 46, 50, 87, 123],
        '3:3': [2, 33, 37, 43, 47, 51, 88, 123],
        '4:4': [2, 33, 37, 43, 47, 51, 89, 123],
        '5+:5+': [2, 33, 37, 43, 47, 51, 90, 123],
    });
    const [calCustomResultArray, setCalCustomResultArray] = useState([]);
    const [customResultCheckObj, setCustomResultCheckObj] = useState({
        '1:0': [1, 34],
        '2:0': [1, 34],
        '2:1': [1, 33],
        '3:0': [1, 34],
        '3:1': [1, 33],
        '3:2': [1, 33],
        '4:0': [1, 34],
        '4:1': [1, 33],
        '4:2': [1, 33],
        '4:3': [1, 33],
        '5+:0': [1, 34],
        '5+:1': [1, 33],
        '5+:2': [1, 33],
        '5+:3': [1, 33],
        '5+:4': [1, 33],
    });

    const [calHostResultArray, setCalHostResultArray] = useState([]);
    const [hostResultCheckObj, setHostResultCheckObj] = useState({
        '0:1': [3, 34],
        '0:2': [3, 34],
        '1:2': [3, 33],
        '0:3': [3, 34],
        '1:3': [3, 33],
        '2:3': [3, 33],
        '0:4': [3, 34],
        '1:4': [3, 33],
        '2:4': [3, 33],
        '3:4': [3, 33],
        '0:5+': [3, 34],
        '1:5+': [3, 33],
        '2:5+': [3, 33],
        '3:5+': [3, 33],
        '4:5+': [3, 33],
    });

    useEffect(() => {
        // betResultArray changed

        updateBetResult();
    }, [betResultObj]);

    function updateBetResult() {
        if (Object.keys(betResultObj).length > 0) {
            // 計算平手
            const newResultCards = Object.entries(drawResultCheckObj).map(
                (entries) => {
                    console.log('entries[1]', entries[1]);
                    console.log('betResultObj', betResultObj);

                    let result = entries[1].filter((e) => {
                        return Object.keys(betResultObj).indexOf(e + '') > -1;
                    });

                    console.log('result', result);

                    const tatalReward = result.reduce((prev, currentId) => {
                        console.log(
                            'betResultObj[currentId]',
                            betResultObj[currentId]
                        );
                        return betResultObj[currentId].isVisible
                            ? betResultObj[currentId].rateValue *
                                  betAmount *
                                  10 +
                                  prev
                            : 0;
                    }, 0);

                    console.log('tatalReward', tatalReward);

                    return {
                        cardTitle: entries[0],
                        isBet: !!result.length,
                        tatalReward: tatalReward,
                    };
                }
            );

            // console.log('newResultCards', newResultCards);
            setCalDrawResultArray(newResultCards);

            // 計算客場勝
            const newCustomResultCards = Object.entries(
                customResultCheckObj
            ).map((entries) => {
                console.log('entries[1]', entries[1]);
                console.log('betResultObj', betResultObj);

                let result = entries[1].filter((e) => {
                    return Object.keys(betResultObj).indexOf(e + '') > -1;
                });

                console.log('result', result);

                const tatalReward = result.reduce((prev, currentId) => {
                    console.log(
                        'betResultObj[currentId]',
                        betResultObj[currentId]
                    );
                    return betResultObj[currentId].isVisible
                        ? betResultObj[currentId].rateValue * betAmount * 10 +
                              prev
                        : 0;
                }, 0);

                console.log('tatalReward', tatalReward);

                return {
                    cardTitle: entries[0],
                    isBet: !!result.length,
                    tatalReward: tatalReward,
                };
            });

            setCalCustomResultArray(newCustomResultCards);

            // 計算主場勝
            const newHostResultCards = Object.entries(hostResultCheckObj).map(
                (entries) => {
                    console.log('entries[1]', entries[1]);
                    console.log('betResultObj', betResultObj);

                    let result = entries[1].filter((e) => {
                        return Object.keys(betResultObj).indexOf(e + '') > -1;
                    });

                    console.log('result', result);

                    const tatalReward = result.reduce((prev, currentId) => {
                        console.log(
                            'betResultObj[currentId]',
                            betResultObj[currentId]
                        );
                        return betResultObj[currentId].isVisible
                            ? betResultObj[currentId].rateValue *
                                  betAmount *
                                  10 +
                                  prev
                            : 0;
                    }, 0);

                    console.log('tatalReward', tatalReward);

                    return {
                        cardTitle: entries[0],
                        isBet: !!result.length,
                        tatalReward: tatalReward,
                    };
                }
            );

            setCalHostResultArray(newHostResultCards);
        }
    }

    function handleClickBetBtn(e) {
        // console.log('e', e);
        // console.log('e', e.target.nodeName);
        // console.log('e currentTarget', e.currentTarget);
        // console.log('e currentTarget nodeName', e.currentTarget.nodeName);

        if (
            e.currentTarget.nodeName === 'BUTTON' &&
            betResultObj[e.currentTarget.dataset.betId] === undefined
        ) {
            // console.log('bet target name', e.currentTarget.innerText);
            // console.log('bet sort name', e.currentTarget.dataset.betTitle);
            const originalData = {
                ...betResultObj,
                [e.currentTarget.dataset.betId]: {
                    targetName: e.currentTarget.innerText,
                    sortName: e.currentTarget.dataset.betTitle,
                    rateValue: 1,
                    isVisible: 1,
                },
            };
            // console.log('originalData', originalData);
            setBetResultObj(originalData);
            setBetTotal(
                Object.values(originalData).reduce(
                    (accumulator, currentValue) => {
                        console.log(currentValue);
                        return currentValue.rateValue;
                    },
                    0
                )
            );
        }
    }

    function handleBetAmount(e) {
        // console.log(e.target.value);
        setBetAmount(e.target.value);
    }

    function handleBetRateChange(e) {
        console.log('handleBetRateChange e', e.target.value);

        // console.log('handleBetRateChange e', e.target.dataset.betId);
        console.log('e.target.dataset.value', e.target.dataset.value);

        if (e.target.dataset.target === 'delete') {
            const originalData = { ...betResultObj };
            delete originalData[e.target.dataset.betId];

            console.log('originalData', originalData);
            setBetResultObj(originalData);
        } else {
            const newValue = e.target.value
                ? e.target.value
                : +e.target.dataset.value === 1
                ? 0
                : 1;
            console.log('handleBetRateChange  newValue', newValue);
            const originalData = { ...betResultObj };
            originalData[e.target.dataset.betId][e.target.dataset.target] =
                newValue;

            console.log('originalData', originalData);
            setBetResultObj(originalData);
        }
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row mb-3" style={{ overflow: 'auto' }}>
                    <h5>左邊客隊＠右邊主隊</h5>
                    <div className="d-flex my-2">
                        {calDrawResultArray.length > 0 &&
                            calDrawResultArray.map((data) => (
                                <CalResult key={data.cardTitle} data={data} />
                            ))}
                    </div>
                    <div className="d-flex my-2">
                        {calCustomResultArray.length > 0 &&
                            calCustomResultArray.map((data) => (
                                <CalResult key={data.cardTitle} data={data} />
                            ))}
                    </div>
                    <div className="d-flex my-2">
                        {calHostResultArray.length > 0 &&
                            calHostResultArray.map((data) => (
                                <CalResult key={data.cardTitle} data={data} />
                            ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="bet">
                            <div className="border p-3 bg-light my-3">
                                <p className="bet-title">不讓分</p>
                                <div className="row justify-content-between g-1">
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="不讓分"
                                            data-bet-id="1"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>左邊客隊</span>
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="不讓分"
                                            data-bet-id="2"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>和局</span>
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="不讓分"
                                            data-bet-id="3"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>右邊主隊</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="border p-3 bg-light my-3">
                                <p className="bet-title">大小</p>
                                <div className="row justify-content-between g-1">
                                    <p>大小[總分]</p>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="大小[總分]"
                                            data-bet-id="33"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>是</span>
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="兩隊是否都進球"
                                            data-bet-id="34"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>否</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row justify-content-between g-1">
                                    <p>大小[總分]</p>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="大小[總分]"
                                            data-bet-id="33"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>是</span>
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="兩隊是否都進球"
                                            data-bet-id="34"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>否</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="border p-3 bg-light my-3">
                                <p className="bet-title">兩隊是否都進球</p>
                                <div className="row justify-content-between g-1">
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="兩隊是否都進球"
                                            data-bet-id="33"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>是</span>
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-secondary"
                                            data-bet-title="兩隊是否都進球"
                                            data-bet-id="34"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>否</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 bg-info py-3">
                        <h5
                            className="text-center btn btn-dark w-100"
                            style={{ borderRadius: 0 }}
                        >
                            投注單
                        </h5>
                        <div id="betResult">
                            {Object.values(betResultObj).length > 0 &&
                                Object.entries(betResultObj).map((data) => (
                                    <BetResult
                                        key={data[0]}
                                        betId={data[0]}
                                        data={data[1]}
                                        handleBetRateChange={
                                            handleBetRateChange
                                        }
                                    />
                                ))}
                        </div>
                        <div className="bg-white mt-3 p-2 d-flex flex-wrap align-items-center">
                            <span className="m-0 me-2">
                                組合投注金額：$10 x
                            </span>
                            <input
                                className="flex-shrink-1"
                                type="text"
                                defaultValue={betAmount}
                                size="5"
                                onChange={handleBetAmount}
                            />
                        </div>

                        <div
                            className="total d-flex justify-content-between mt-3 p-1"
                            style={{ fontWeight: '900' }}
                        >
                            <p className=" text-danger h5">總投注金額：</p>
                            <p className=" text-danger h5">{`$${
                                Object.values(betResultObj).length *
                                betAmount *
                                10
                            } NTD`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
