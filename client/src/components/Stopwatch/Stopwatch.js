import "./Stopwatch.css";

const StopwatchApp = () => {
    return (
        <div>
            <div class="u-posAbsoluteCenter">
                <div class="Timer">
                    <div class="Timer-inner"></div>
                </div>
            </div>

            <div class="u-bottomBar">
                <button className="button" id="start">
                    Start
                </button>
                <button className="button" id="reset">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopwatchApp;
