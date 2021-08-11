const express = require("express");
const router = express.Router();
const signUpTemplate = require("../Models/SignUpModel");

router.post("/signup", (req, res) => {
    const signedUpUser = new signUpTemplate({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    signedUpUser
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
