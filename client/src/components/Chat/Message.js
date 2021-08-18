const Message = (prop) => {
    return (
        <div
            className={
                prop.sender === "server" ? "answer left" : "answer right"
            }
        >
            <div className="avatar">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User name"
                />
                <div className="status offline"></div>
            </div>
            <div className="name">Alexander Herthic</div>
            <div className="text">{prop.message}</div>
            <div className="time">5 min ago</div>
        </div>
    );
};

export default Message;
