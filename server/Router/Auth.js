const router = require("express").Router();
const { signIn, signUp } = require("../Controllers/Auth");

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);

module.exports = router;
