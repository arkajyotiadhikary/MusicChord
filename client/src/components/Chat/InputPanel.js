import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const InputPanel = () => {
    const handleInput = () => {};

    return (
        <div className="chat-input d-flex">
            <input
                className="form-control rounded-pill"
                placeholder="Write a message"
                autoFocus
            />
            <button className="btn rounded-pill ms-3 answer-btn">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
};

export default InputPanel;
