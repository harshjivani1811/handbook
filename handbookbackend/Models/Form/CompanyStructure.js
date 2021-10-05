const mongoose = require("mongoose");
const User = require("../User")

const CompanyStructureModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    R1: {
        type: String,
        required: true,
        trim: true
    },
    R2: {
        type: String,
        required: true,
        trim: true
    },
    R3: {
        type: String,
        required: true,
        trim: true
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Companystructure", CompanyStructureModel);