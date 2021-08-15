import axios from "axios";

const endpoint = "http://localhost:8000";

const signUp = async (formData) => {
    const registeredUser = await axios.post(
        `${endpoint}/auth/signup`,
        formData
    );
    console.log(registeredUser);
};

const signIn = async (formData) => {
    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/signin`,
            formData
        );
        console.log(signInDetails);
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log(err.data.msg);
        }
        console.log(err);
    }
};

export { signUp, signIn };
