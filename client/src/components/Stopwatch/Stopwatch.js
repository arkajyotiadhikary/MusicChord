import React, { useState, useRef } from "react";

import "./Stopwatch.css";
import BreakLenght from "./BreakLenght";
import SessionLenght from "./SessionLenght";
import Clock from "./Clock";
import ButtonRow from "./ButtonRow";

const StopwatchApp = () => {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const countRef = useRef(null);
    let timeInt;

    const handleStart = () => {
        setIsActive(true);
        setIsPause(true);
        timeInt = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const setTime = (time) => {
        setTimer(time);
    };

    const handlePause = () => {
        clearInterval(timeInt);
        setIsPause(true);
    };

    const handleResume = () => {
        setIsPause(true);
        timeInt = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handleReset = () => {
        clearInterval(timeInt);
        setIsActive(false);
        setIsPause(false);
    };

    console.log(timer);

    return (
        <div className="card border-0 ps-2 pomodoro">
            <div className="card-body">
                <div className="row">
                    <SessionLenght setTime={setTime} />
                    <BreakLenght />
                </div>
                <div id="clock" className="row">
                    <Clock timer={timer} />
                </div>
                <div id="buttons" className="row">
                    <ButtonRow />
                </div>
            </div>
        </div>
    );
};

export default StopwatchApp;
