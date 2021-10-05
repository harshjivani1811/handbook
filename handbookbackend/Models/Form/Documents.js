const mongoose = require('mongoose')

const Documents = new mongoose.Schema(
  {
    documents: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Documents', Documents)
