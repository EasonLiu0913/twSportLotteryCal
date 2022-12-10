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
        '0:0': [
            2, 34, 35, 38, 44, 48, 85, 123, 1002, 1004, 1006, 1008, 1010, 1012,
            1014, 1016, 1018, 1020, 1022, 1024, 85,
        ],
        '1:1': [
            2, 33, 36, 40, 45, 49, 86, 123, 1001, 1003, 1006, 1008, 1009, 1012,
            1014, 1016, 1017, 1020, 1022, 1024, 86,
        ],
        '2:2': [
            2, 33, 37, 42, 46, 50, 87, 123, 1001, 1003, 1005, 1007, 1009, 1011,
            1014, 1016, 1017, 1019, 1022, 1024, 87,
        ],
        '3:3': [
            2, 33, 37, 43, 47, 51, 88, 123, 1001, 1003, 1005, 1007, 1009, 1011,
            1013, 1016, 1017, 1019, 1021, 1024, 88,
        ],
        '4:4': [
            2, 33, 37, 43, 47, 51, 89, 123, 1001, 1003, 1005, 1007, 1009, 1011,
            1013, 1015, 1017, 1019, 1021, 1023, 89,
        ],
        '5+:5+': [
            2, 33, 37, 43, 47, 51, 90, 123, 1001, 1003, 1005, 1007, 1009, 1011,
            1013, 1015, 1017, 1019, 1021, 1023, 90,
        ],
    });
    const [calCustomResultArray, setCalCustomResultArray] = useState([]);
    const [customResultCheckObj, setCustomResultCheckObj] = useState({
        '1:0': [
            1, 34, 1001, 1004, 1006, 1008, 1010, 1012, 1014, 1016, 1017, 1020,
            1022, 1024, 70,
        ],
        '2:0': [
            1, 34, 1001, 1003, 1006, 1008, 1010, 1012, 1014, 1016, 1017, 1019,
            1022, 1024, 71,
        ],
        '2:1': [
            1, 33, 1001, 1003, 1005, 1008, 1009, 1012, 1014, 1016, 1017, 1019,
            1022, 1024, 72,
        ],
        '3:0': [
            1, 34, 1001, 1003, 1005, 1008, 1010, 1012, 1014, 1016, 1017, 1019,
            1021, 1024, 73,
        ],
        '3:1': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1012, 1014, 1016, 1017, 1019,
            1021, 1024, 74,
        ],
        '3:2': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1014, 1016, 1017, 1019,
            1021, 1024, 75,
        ],
        '4:0': [
            1, 34, 1001, 1003, 1005, 1007, 1010, 1012, 1014, 1016, 1017, 1019,
            1021, 1023, 76,
        ],
        '4:1': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1012, 1014, 1016, 1017, 1019,
            1021, 1023, 77,
        ],
        '4:2': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1014, 1016, 1017, 1019,
            1021, 1023, 78,
        ],
        '4:3': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1016, 1017, 1019,
            1021, 1023, 79,
        ],
        '5+:0': [
            1, 34, 1001, 1003, 1005, 1007, 1010, 1012, 1014, 1016, 1017, 1019,
            1021, 1023, 80,
        ],
        '5+:1': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1012, 1014, 1016, 1017, 1019,
            1021, 1023, 81,
        ],
        '5+:2': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1014, 1016, 1017, 1019,
            1021, 1023, 82,
        ],
        '5+:3': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1016, 1017, 1019,
            1021, 1023, 83,
        ],
        '5+:4': [
            1, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1021, 1023, 84,
        ],
    });

    const [calHostResultArray, setCalHostResultArray] = useState([]);
    const [hostResultCheckObj, setHostResultCheckObj] = useState({
        '0:1': [
            3, 34, 1001, 1004, 1006, 1008, 1009, 1012, 1014, 1016, 1018, 1020,
            1022, 1024, 91,
        ],
        '0:2': [
            3, 34, 1001, 1003, 1006, 1008, 1009, 1011, 1014, 1016, 1018, 1020,
            1022, 1024, 92,
        ],
        '1:2': [
            3, 33, 1001, 1003, 1005, 1008, 1009, 1011, 1014, 1016, 1017, 1020,
            1022, 1024, 93,
        ],
        '0:3': [
            3, 34, 1001, 1003, 1005, 1008, 1009, 1011, 1013, 1016, 1018, 1020,
            1022, 1024, 94,
        ],
        '1:3': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1016, 1017, 1020,
            1022, 1024, 95,
        ],
        '2:3': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1016, 1017, 1019,
            1022, 1024, 96,
        ],
        '0:4': [
            3, 34, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1018, 1020,
            1022, 1024, 97,
        ],
        '1:4': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1020,
            1022, 1024, 98,
        ],
        '2:4': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1022, 1024, 99,
        ],
        '3:4': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1021, 1024, 100,
        ],
        '0:5+': [
            3, 34, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1018, 1020,
            1022, 1024, 101,
        ],
        '1:5+': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1020,
            1022, 1024, 102,
        ],
        '2:5+': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1022, 1024, 103,
        ],
        '3:5+': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1021, 1024, 104,
        ],
        '4:5+': [
            3, 33, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019,
            1021, 1023, 105,
        ],
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
                        return betResultObj[currentId].isVisible
                            ? betResultObj[currentId].rateValue *
                                  betAmount *
                                  10 +
                                  prev
                            : 0;
                    }, 0);
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
        // console.log('handleBetRateChange e', e.target.value);

        // console.log('handleBetRateChange e', e.target.dataset.betId);
        // console.log('e.target.dataset.value', e.target.dataset.value);

        if (e.target.dataset.target === 'delete') {
            const originalData = { ...betResultObj };
            delete originalData[e.target.dataset.betId];

            // console.log('originalData', originalData);
            setBetResultObj(originalData);
        } else {
            const newValue = e.target.value
                ? e.target.value
                : +e.target.dataset.value === 1
                ? 0
                : 1;
            // console.log('handleBetRateChange  newValue', newValue);
            const originalData = { ...betResultObj };
            originalData[e.target.dataset.betId][e.target.dataset.target] =
                newValue;

            // console.log('originalData', originalData);
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
                <div className="row align-items-start">
                    <div className="col-6 col-md-4 offset-md-2">
                        {/* 不讓分 */}
                        <div className="border p-3 bg-light mb-3">
                            <h5 className="bet-title">不讓分</h5>
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

                        {/* 兩隊是否都進球 */}
                        <div className="border p-3 bg-light my-3">
                            <h5 className="bet-title">兩隊是否都進球</h5>
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

                        {/* 大小 */}
                        <div className="border p-3 bg-light my-3">
                            <h5 className="bet-title">大小</h5>

                            <p>大小[總分]</p>
                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1001"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 0.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1002"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 0.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1003"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 1.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1004"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 1.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1005"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 2.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1006"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 2.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1007"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 3.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[總分]"
                                        data-bet-id="1008"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 3.5</span>
                                    </button>
                                </div>
                            </div>

                            <p>大小[主隊]</p>
                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1009"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 0.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1010"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 0.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1011"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 1.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1012"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 1.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]]"
                                        data-bet-id="1013"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 2.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1014"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 2.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1015"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 3.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[主隊]"
                                        data-bet-id="1016"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 3.5</span>
                                    </button>
                                </div>
                            </div>

                            <p>大小[客隊]</p>
                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1017"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 0.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1018"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 0.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1019"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 1.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1020"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 1.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]]"
                                        data-bet-id="1021"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 2.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1022"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 2.5</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row justify-content-between g-1 my-2">
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1023"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>大 3.5</span>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-secondary"
                                        data-bet-title="大小[客隊]"
                                        data-bet-id="1024"
                                        onClick={handleClickBetBtn}
                                    >
                                        <span>小 3.5</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 正確比數 */}
                        <div className="border p-3 bg-light my-3">
                            <h5 className="bet-title">正確比數</h5>
                            <div className="row justify-content-between g-1">
                                <div className="col-4">
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small"
                                            data-bet-title="正確比數"
                                            data-bet-id="70"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:0</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="71"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:0</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="72"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:1</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="73"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:0</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="74"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:1</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="75"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:2</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="76"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:0</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="77"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:1</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="78"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:2</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="79"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:3</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="80"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:0</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="81"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:1</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="82"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:2</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="83"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:3</span>
                                        </button>
                                    </div>

                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="84"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:4</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="85"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:0</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="86"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:1</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="87"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:2</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="88"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:3</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="89"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:4</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small small-padding"
                                            data-bet-title="正確比數"
                                            data-bet-id="90"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>5+:5+</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="91"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:1</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="92"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:2</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="93"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:2</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="94"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:3</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="95"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:3</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="96"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:3</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="97"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:4</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="98"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:4</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="99"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:4</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="100"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:4</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="101"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>0:5+</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="102"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>1:5+</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="103"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>2:5+</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="104"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>3:5+</span>
                                        </button>
                                    </div>
                                    <div className="my-2">
                                        <button
                                            className="btn btn-secondary btn-small "
                                            data-bet-title="正確比數"
                                            data-bet-id="105"
                                            onClick={handleClickBetBtn}
                                        >
                                            <span>4:5+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-6 col-md-4 bg-info py-3 position-sticky"
                        style={{ top: 0 }}
                    >
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
                                Object.values(betResultObj).filter(
                                    (item) => item.isVisible
                                ).length *
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
