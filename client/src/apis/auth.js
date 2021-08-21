import axios from "axios";

const endpoint = "http://localhost:8000";

const signUp = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const registeredUser = await axios.post(
            `${endpoint}/auth/signup`,
            formData,
            config
        );
        history.push("/signin");
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(err);
    }
};

const signIn = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/signin`,
            formData,
            config
        );

        localStorage.setItem("token", signInDetails.data.token);
        history.push("/main");
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(err);
    }
};

const loadUser = async () => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = {
        token,
    };

    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/loaduser`,
            body,
            config
        );

        return signInDetails;
    } catch (error) {
        console.log(error.response);
        // TODO wrong in err
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(error);
        return false;
    }
};

export { signUp, signIn, loadUser };
