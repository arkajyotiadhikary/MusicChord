import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faPlay, faReply } from "@fortawesome/free-solid-svg-icons";

const ButtonRow = (props) => {
    return (
        <div className="d-flex justify-content-center pt-1 mx-1">
            <button className="btn btn-secondary" onClick={props.handleStart}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
            <button className="btn btn-secondary mx-3">
                <FontAwesomeIcon icon={faStop} />
            </button>
            <button className="btn btn-secondary">
                <FontAwesomeIcon icon={faReply} />
            </button>
        </div>
    );
};

export default ButtonRow;
