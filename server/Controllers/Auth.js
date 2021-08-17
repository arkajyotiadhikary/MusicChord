const jwt = require("jsonwebtoken");
const User = require("../Models/SignUpModel");
const { encrypt, decrypt } = require("../Utils/encrypt");

// Sign In route
// /auth/signin
// Public

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await User.findOne({ email });
        if (!userData) {
            res.status(400).json({
                msg: "User didn't sign up, Sign up first",
            });
        }
        const isPasswordMatched = await decrypt(password, userData.password);

        if (!isPasswordMatched) {
            res.status(400).json({
                msg: "Password didn't match, check your password and retry again",
            });
        }

        const token = jwt.sign({ email }, process.env.JWT_TOKEN_KEY, {
            expiresIn: "2h",
        });

        res.status(200).json({
            msg: "User signed in successfully",
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error signing in!!!" });
    }
};

// Sign Up route
// /auth/signup
// Public

const signUp = async (req, res) => {
    try {
        const hashedPassword = await encrypt(req.body.password);

        await User.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email.toLowerCase(),
        });

        res.status(200).json({ msg: "User signed up successfully" });
    } catch (error) {
        console.log(error, " fdhso");
        res.status(500).json({ msg: "Error signing up!!!" });
    }
};

// Sign Up route
// /auth/loadUser
// Public

const loadUser = async (req, res) => {
    const { token } = req.body;
    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        const verifiedUserDetails = await User.findOne({
            email: verifiedUser.email,
        });

        console.log("token", verifiedUserDetails);

        res.status(200).json({
            msg: "User loaded successfully",
            data: verifiedUserDetails,
        });
    } catch (error) {
        // const err = error.response.msg;
        // console.log(err);
        res.status(500).json({ msg: "Error loading user!!!" });
    }
};

module.exports = { signIn, signUp, loadUser };