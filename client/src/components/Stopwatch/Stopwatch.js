import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";
import BreakLenght from "./BreakLenght";
import SessionLenght from "./SessionLenght";
import Clock from "./Clock";
import ButtonRow from "./ButtonRow";

const StopwatchApp = () => {
    const [times, setTimes] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [timer, setTimer] = useState(0);
    const [timeSec, setTimeSec] = useState(0);

    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const countRef = useRef(null);

    const decrementTime = () => {
        setTimeSec((timeSec) => timeSec - 1);
    };

    const handleStart = () => {
        setIsActive(false);
        setIsPause(true);
        countRef.current = setInterval(decrementTime, 1000);
    };

    const setTime = (time) => {
        setTimeSec(time * 60);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
        setIsPause(false);
        setIsActive(true);
    };

    // TODO
    // const handleResume = () => {
    //     setIsPause(true);
    //     setInterval(decrementTime, 1000);
    // };

    // const handleReset = () => {
    //     clearInterval(decrementTime);
    //     setIsActive(false);
    //     setIsPause(false);
    // };

    useEffect(() => {
        setTimes({
            ...times,
            hours: Math.floor(timeSec / 3600),
            minutes: Math.floor(
                (timeSec - Math.floor(timeSec / 3600) * 3600) / 60
            ),
            seconds:
                timeSec -
                Math.floor(timeSec / 3600) * 3600 -
                Math.floor((timeSec - Math.floor(timeSec / 3600) * 3600) / 60) *
                    60,
        });
    }, [timeSec]);

    return (
        <div className="card border-0 ps-2 pomodoro">
            <div className="card-body">
                <div className="row">
                    <SessionLenght setTime={setTime} />
                    <BreakLenght />
                </div>
                <div id="clock" className="row">
                    <Clock isPause={isPause} timer={timer} times={times} />
                </div>
                <div id="buttons" className="row">
                    <ButtonRow
                        handleStart={handleStart}
                        handlePause={handlePause}
                        isPause={isPause}
                        isActive={isActive}
                    />
                </div>
            </div>
        </div>
    );
};

export default StopwatchApp;
