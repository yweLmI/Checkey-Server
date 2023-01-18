const mongoose = require("mongoose");

const KeySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    create_at: {
        type: String,
    },
    end_at: {
        type: String,
    },
});
module.exports = mongoose.model("Key", KeySchema);
