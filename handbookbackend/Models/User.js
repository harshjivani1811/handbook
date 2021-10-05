// @ts-nocheck
const mongoose = require('mongoose')
const crypto = require('crypto')

const UserModel = new mongoose.Schema(
  {
    isOwner: {
      type: Boolean,
      required: true
    },
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    gender: {
      type: String
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

UserModel.virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

UserModel.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword
  },

  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + ''
  }
}

module.exports = mongoose.model('User', UserModel)
