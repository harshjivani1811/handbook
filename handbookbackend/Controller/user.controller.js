const User = require("../Models/User");
const crypto = require("crypto");
const { Logger } = require("../utils/logger");
let userAccountController = {};

userAccountController.createUser = (req, res) => {
  const { isOwner, firstName, lastName, gender, email, password, phoneNumber } =
    req.body;
  const phone_numberRegex = /^\d{10}$/;
  if (!phone_numberRegex.test(phoneNumber))
    return res.status(400).json({
      success: false,
      error: "Phone number is invalid",
    });
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({
        success: false,
        error: "email is already taken",
      });
    }

    let newUser = User({
      isOwner,
      firstName,
      lastName,
      gender,
      email,
      password,
      phoneNumber,
    });

    newUser
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          message: "User successfully created.",
        });
      })
      .catch((err) => {
        Logger.error("User creation failed!");
        return res.status(400).json({
          success: false,
          error: "User creation failed!",
        });
      });
  });
};

userAccountController.getAllUser = async (req, res) => {
  try {
    users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

userAccountController.getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    user = await User.findOne({ _id: id });
    if (user.is_owner === true) {
      return res.status(200).json({
        success: true,
        data: user,
      });
    } else {
      return res.status(401).json({
        success: false,
        error: "ACCESS DENIED!",
      });
    }
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(400).json({
      success: false,
      error: "er",
    });
  }
};

userAccountController.updateUser = async (req, res) => {
  try {
    const {
      _id,
      isOwner,
      firstName,
      lastName,
      gender,
      email,
      password,
      phoneNumber,
    } = req.body;

    const user = {
      isOwner,
      firstName,
      lastName,
      gender,
      email,
      password,
      phoneNumber,
    };

    User.findOne({ _id }).then((data) => {
      if (!data) {
        return res.status(400).json({
          success: false,
          error: "User not found",
        });
      }
      if (req.body.isOwner) {
        data.isOwner = req.body.isOwner;
      }
      if (req.body.firstName) {
        data.firstName = req.body.firstName;
      }
      if (req.body.lastName) {
        data.lastName = req.body.lastName;
      }
      if (req.body.gender) {
        data.gender = req.body.gender;
      }
      if (req.body.email) {
        data.email = req.body.email;
      }
      if (req.body.password) {
        data.password = req.body.password;
      }
      if (req.body.phoneNumber) {
        data.phoneNumber = req.body.phoneNumber;
      }

      data
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            message: "User successfully updated.",
          });
        })
        .catch((err) => {
          // console.log(err);
          Logger.error("User already Confirmed");
          return res.status(400).json({
            success: false,
            error: "User already confirmed.",
          });
        });
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

userAccountController.deleteUser = async (req, res) => {
  try {
    user = await User.findOneAndRemove({ _id: req.body._id });
    return res.status(200).json({
      success: true,
      message: "User Removed",
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = userAccountController;
