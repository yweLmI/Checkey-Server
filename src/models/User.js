const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Domain: {
        type: String,
        required: true,
    },
    Key: {
        type: String,
        required: true,
    },
    Token: {
        type: String,
    },
});
module.exports = mongoose.model("User", UserSchema);
