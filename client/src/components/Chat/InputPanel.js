import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";

const InputPanel = (prop) => {
    const inputField = useRef(null);

    const [input, setInput] = useState("");

    const handleInput = () => {
        setInput(inputField.current.value);
    };

    return (
        <div className="chat-input d-flex">
            <input
                ref={inputField}
                onChange={handleInput}
                value={input}
                className="form-control rounded-pill"
                placeholder="Write a message"
                autoFocus
            />
            <button
                className="btn rounded-pill ms-3 answer-btn"
                onClick={() => {
                    prop.handleUserMessages(input);
                    setInput("");
                }}
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
};

export default InputPanel;
