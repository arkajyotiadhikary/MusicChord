import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (prop) => {
    const [useBtn, setUseBtn] = useState(false);
    const handleClick = () => {
        useBtn ? setUseBtn(false) : setUseBtn(true);
    };

    return (
        <button
            className={`btn btn-light shadow ${
                useBtn ? "bg-primary text-white" : "bg-white text-primary"
            } rounded-circle`}
            type="Submit"
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={prop.font} />
        </button>
    );
};

export default Button;
