import "./clock.css";
const Clock = () => {
    return (
        <>
            <div className="timer d-flex justify-content-center my-1">
                <svg viewBox="0 0 100 100" width="200" height="200">
                    <g transform="translate(50 50)">
                        <circle
                            id="dial"
                            cx="0"
                            cy="0"
                            r="42"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="5"
                            stroke-dasharray="0.3 1.898"
                        ></circle>
                        <use href="#dial" transform="scale(-1 1)"></use>

                        <g className="rotate" transform="rotate(0)">
                            <g transform="translate(0 -50)">
                                <path
                                    d="M -2.25 0 h 4.5 l -2.25 2.5 l -2.25 -2.5"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                ></path>
                            </g>
                        </g>
                        <g transform="rotate(45)">
                            <g
                                className="mark"
                                transform="translate(0 0)"
                                opacity="0"
                            >
                                <g transform="translate(0 -38)">
                                    <circle r="1" fill="currentColor"></circle>
                                </g>
                            </g>
                        </g>

                        <g transform="translate(0 20)">
                            <g
                                className="rotate"
                                transform="rotate(0)"
                                // style="animation-duration: 1s"
                            >
                                <path
                                    d="M 0 -1 v -4.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="0.4"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                ></path>
                            </g>
                            <circle
                                r="7"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="0.4"
                            ></circle>
                            <circle
                                r="1"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="0.4"
                            ></circle>
                        </g>

                        <text
                            text-anchor="middle"
                            fill="currentColor"
                            dominant-baseline="middle"
                            font-size="10"
                            // style="font-weight: 300; letter-spacing: 1px;"
                        >
                            00:00.0
                        </text>
                    </g>
                </svg>
            </div>
        </>
    );
};

export default Clock;
