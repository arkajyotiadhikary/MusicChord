import WeatherApp from "../Weather/WeatherApp";
import StopwatchApp from "../Stopwatch/Stopwatch";

const ThirdCol = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-between">
            <WeatherApp />
            <StopwatchApp />
        </div>
    );
};

export default ThirdCol;
