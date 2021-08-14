const User = () => {
    return (
        <div className="user mb-4">
            <div class="avatar mx-auto">
                <img
                    className="img-fluid rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User name"
                />
            </div>
            <div class="status off"></div>
            <div class="name">User name</div>
            <div class="mood">User mood</div>
        </div>
    );
};
export default User;
