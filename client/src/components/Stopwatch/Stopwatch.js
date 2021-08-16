import "./Stopwatch.css";
import BreakLenght from "./BreakLenght";
import SessionLenght from "./SessionLenght";
import Clock from "./Clock";
import ButtonRow from "./ButtonRow";

const StopwatchApp = () => {
    return (
        <div className="card border-0 ps-2 pomodoro">
            <div className="card-body">
                <div className="row">
                    <SessionLenght />
                    <BreakLenght />
                </div>
                <div id="clock" className="row">
                    <Clock />
                </div>
                <div id="buttons" className="row">
                    <ButtonRow />
                </div>
            </div>
        </div>
    );
};

export default StopwatchApp;
