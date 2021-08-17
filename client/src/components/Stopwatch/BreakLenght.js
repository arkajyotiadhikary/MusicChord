import React, { useState } from "react";

const BreakLenght = () => {
    const [breakLenght, setBreakLenght] = useState(0);

    return (
        <div className="col-md-6">
            <div className="text-center">
                <p>Break length</p>
            </div>
            <div className="d-flex justify-content-between counter">
                <div className="">
                    <button
                        onClick={() => {
                            const len = breakLenght > 0 ? breakLenght - 1 : 0;
                            setBreakLenght(len);
                        }}
                        className="btn btn-default"
                        id="sessDec"
                    >
                        -
                    </button>
                </div>
                <div className="">
                    <div id="session">{breakLenght}</div>
                </div>
                <div class="">
                    <button
                        onClick={() => {
                            setBreakLenght(breakLenght + 1);
                        }}
                        className="btn btn-default"
                        id="sessInc"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BreakLenght;
