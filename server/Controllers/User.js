const User = require("../Models/SignUpModel");

const getUserDetails = async (req, res) => {
    const { userIds } = req.body;
    try {
        let userDetails = userIds.map(async (user) => {
            console.log(user.userId);
            const demo = await User.findOne({
                _id: user.userId,
            });
            // console.log(demo);
            return demo;
        });
        // console.log(userDetails);
        userDetails = await Promise.all(userDetails);

        res.status(200).json({
            msg: "User sent successfully",
            data: userDetails,
        });
    } catch (error) {
        const err = error.response;
        console.log(err);
        res.status(500).json({ msg: "Error loading user!!!" });
    }
};

module.exports = {
    getUserDetails,
};
