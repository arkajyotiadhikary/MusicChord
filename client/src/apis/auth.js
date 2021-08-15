import axios from "axios";

const endpoint = "http://localhost:8000";

const signUp = async (formData, history) => {
    try {
        const registeredUser = await axios.post(
            `${endpoint}/auth/signup`,
            formData
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
    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/signin`,
            formData
        );

        console.log(signInDetails);

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

    const body = {
        token,
    };

    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/loaduser`,
            body
        );
        console.log(signInDetails);
        return signInDetails;
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(error);
        return false;
    }
};

export { signUp, signIn, loadUser };
