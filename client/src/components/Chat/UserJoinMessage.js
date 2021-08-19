const UserJoinMessage = ({ props }) => {
    const { message, data } = props;

    return (
        <div className="userjoinmsg">
            <div className="text">{message}</div>
        </div>
    );
};

export default UserJoinMessage;
