const mongoose = require('mongoose')

const StateForLeaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

}, {timestamps: true}
)

module.exports = mongoose.model("StateForLeave", StateForLeaveSchema)