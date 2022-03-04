const mongoose = require("mongoose");
const User = require("../User");

const StateModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    state: {
        type: [String],
        required: true,
        default: []
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("State", StateModel)
