const mongoose = require("mongoose");
const { string } = require("prop-types");

const signUpTemplate = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("musicchord", signUpTemplate);
