const mongoose = require("mongoose");
const User = require("../User")

const CompanyVehiclesModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isCompanyVehicle: {
        type: String,
        required: true,
        trim: true
    },
    isGpsSystem: {
        type: String,
        required: true,
        trim: true
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("Companyvehicle", CompanyVehiclesModel);