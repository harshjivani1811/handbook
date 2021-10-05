const mongoose = require("mongoose");
const User = require("../User");

const FireExitModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    location: {
        type: String,
        required: true,
        maxlength: 500,
        trim: true
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("Fireexit", FireExitModel)