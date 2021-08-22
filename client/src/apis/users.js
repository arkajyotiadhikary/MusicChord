import axios from "axios";

const endpoint = "http://localhost:8000";

const getUserDetails = async (userIds) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = {
        userIds,
    };

    try {
        const userDetails = await axios.post(`${endpoint}/user`, body, config);

        return userDetails;
    } catch (error) {
        console.log(error.response);
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
    }
};

export { getUserDetails };
