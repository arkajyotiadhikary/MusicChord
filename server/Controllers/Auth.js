const User = require("../Models/SignUpModel");

// Sign In route
// /auth/signin
// Public

const signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const userData = await User.findOne({ email, password });
        if (!userData) {
            res.status(400).json({
                msg: "Either email or password is wrong, please check and type it correctly",
            });
        }
        res.status(200).json({ msg: "User signed in successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error signing up!!!" });
    }
};

// Sign Up route
// /auth/signup
// Public

const signUp = async (req, res) => {
    const signedUpUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    try {
        await signedUpUser.save();
        res.status(200).json({ msg: "User signed up successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error signing up!!!" });
    }
};

module.exports = { signIn, signUp };
