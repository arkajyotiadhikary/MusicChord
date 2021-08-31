import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const PlayerController = (props) => {
    return (
        <div className="c-player--controls">
            <button onClick={props.handlePlay} className="play-btn">
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
        </div>
    );
};

export default PlayerController;
