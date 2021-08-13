import Button from "./Button";

const ButtonBar = () => {
    return (
        <div className="card shadow my-2">
            <div className="d-flex justify-content-between my-3 mx-3">
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        </div>
    );
};

export default ButtonBar;
