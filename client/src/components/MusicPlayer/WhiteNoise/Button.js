import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (prop) => {
    return (
        <button className="btn btn-light shadow rounded-circle" type="Submit">
            <FontAwesomeIcon icon={prop.font} />
        </button>
    );
};

export default Button;
