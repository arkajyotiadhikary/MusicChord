import "./Stopwatch.css";
import BreakLenght from "./BreakLenght";
import SessionLenght from "./SessionLenght";
import Clock from "./Clock";

const StopwatchApp = () => {
    return (
        <div className="pomodoro">
            <div className="row">
                <SessionLenght />
                <BreakLenght />
            </div>
            <div id="clock" className="row">
                <Clock />
            </div>
        </div>
    );
};

export default StopwatchApp;
