const router = require("express").Router();
const { getUserDetails } = require("../Controllers/User");

router.route("/").post(getUserDetails);

module.exports = router;
