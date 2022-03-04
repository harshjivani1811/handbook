const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    companySize: {
        type: String,
        required: true,
        trime: true
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StateForLeave"
    }

}, {timestamps: true}
)

module.exports = mongoose.model("Leave", LeaveSchema)