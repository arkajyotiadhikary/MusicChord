import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    // faForward,
    // faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerController = (props) => {
    return (
        <div className="c-player--controls">
            {/* <button className="skip-btn" onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button> */}
            <button
                onClick={() => props.setIsPlaying(!props.isPlaying)}
                className="play-btn"
            >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            {/* <button className="skip-btn" onClick={() => props.skipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button> */}
        </div>
    );
};

export default PlayerController;
