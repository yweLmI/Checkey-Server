const mongoose = require("mongoose");

const KeySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    create_at: {
        type: String,
        required: true,
    },
    end_at: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("Key", KeySchema);
