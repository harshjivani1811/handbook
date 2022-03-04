const mongoose = require("mongoose");
const User = require("../User");

const HolidayPayModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isHolidayPay: {
        type: String,
        required: true,
        trim: true
    },
    holiday: {
        type: [String],
        required: true,
        default: []
    },
    isPayHolidayPay: {
        type: String,
        required: true,
        trim: true
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Holidaypay", HolidayPayModel)