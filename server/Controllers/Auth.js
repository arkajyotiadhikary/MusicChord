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
    try {
        const hashedPassword = await encrypt(req.body.password);

        const signedUpUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
        });

        await signedUpUser.save();
        res.status(200).json({ msg: "User signed up successfully" });
    } catch (error) {
        console.log(error, " fdhso");
        res.status(500).json({ msg: "Error signing up!!!" });
    }
};

module.exports = { signIn, signUp };
