const router = require("express").Router();
const { signIn, signUp, loadUser } = require("../Controllers/Auth");

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);
router.route("/loaduser").post(loadUser);

module.exports = router;
