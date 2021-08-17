import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faPlay, faReply } from "@fortawesome/free-solid-svg-icons";

const ButtonRow = (props) => {
    return (
        <div className="d-flex justify-content-center pt-1 mx-1">
            <button
                className="btn btn-secondary mx-3"
                onClick={props.isPause ? props.handlePause : props.handleStart}
            >
                <FontAwesomeIcon icon={props.isPause ? faStop : faPlay} />
            </button>

            <button className="btn btn-secondary mx-3">
                <FontAwesomeIcon icon={faReply} />
            </button>
        </div>
    );
};

export default ButtonRow;
