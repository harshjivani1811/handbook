const mongoose = require('mongoose')
const User = require('../User')

const GeneralInformationModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    firstName: {
      type: String,
      required: true,
      maxlength: 40,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 40,
      trim: true
    },
    companyName: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true
    },
    noOfEmployees: {
      type: Number,
      required: true,
      maxlength: 50,
      trim: true
    },
    streetAddress: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    zipcode: {
      type: Number,
      required: true,
      maxlength: 10,
      trim: true
    },
    phonenumber: {
      type: Number,
      required: true,
      maxlength: 15,
      trim: true
    },
    email: {
      type: String,
      required: true,
      maxlength: 40,
      trim: true
    },
    document: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Generalinformation', GeneralInformationModel)
