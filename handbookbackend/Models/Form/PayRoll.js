const mongoose = require("mongoose");
const User = require("../User")

const PayRollModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isPayRoll: {
        type: String,
        required: true,
        trim: true
    },
    isPayRollOps: {
        firsthalf : {
            type: String,
            required: true,
            trim: true
        },
        secondhalf: {
            type: String,
            trim: true
        }
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("Payroll", PayRollModel)