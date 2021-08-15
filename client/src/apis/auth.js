import axios from "axios";

const endpoint = "http://localhost:8000";

const signUp = async (formData) => {
    try {
        const registeredUser = await axios.post(
            `${endpoint}/auth/signup`,
            formData
        );
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(err);
    }
};

const signIn = async (formData) => {
    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/signin`,
            formData
        );
        localStorage.setItem("token", signInDetails.data.token);
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

    const body = {
        token,
    };

    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/loaduser`,
            body
        );
        console.log(signInDetails);
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(error);
    }
};

export { signUp, signIn, loadUser };
