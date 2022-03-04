require('dotenv').config()
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Logger } = require("../utils/index");
const User = require("../Models/User");

let adminAuthController = {};

adminAuthController.signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user)
          return res.status(400).json({ error: "No such user found!" });
  
        if (user && !user.authenticate(password))
          return res.status(400).json({
            message: "email/Password incorrect",
          });
  
        // generate token and send to client
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
  
        return res.status(200).json({
          meta: {
            id: user._id,
            isOwner: user.isOwner,
          },
          token,
          message: "Signin Successful",
          success: true,
        });
      })
      .catch((error) => {
        // console.log(error, "test");
        Logger.error(JSON.stringify(error));
        return res.status(400).json({
          success: false,
          message: "email/Password incorrect",
        });
      });
  };
  
//   adminAuthController.changePassword = (req, res) => {
//     const { email_id, oldPassword, newPassword } = req.body;
  
//     Admin.findOne({ email_id })
//       .then(async (admin) => {
//         if (!admin) return res.status(400).json({ error: "email_id incorrect" });
  
//         if (admin && !admin.authenticate(oldPassword))
//           return res.status(400).json({
//             message: "Old Password incorrect",
//           });
  
//         try {
//           const salt = Math.round(new Date().valueOf() * Math.random()) + "";
//           const hash = crypto
//             .createHmac("sha1", salt)
//             .update(newPassword)
//             .digest("hex");
//           await Admin.findOneAndUpdate(
//             { email_id },
//             { salt: salt, hashed_password: hash }
//           );
//           return res.status(200).json({
//             success: true,
//             message: "Password Updated",
//           });
//         } catch (error) {
//           // Logger.error(JSON.stringify(error));
//           return res.status(400).json({
//             success: false,
//             message: "Something Went Wrong !!!",
//             error: error,
//           });
//         }
//       })
//       .catch((error) => {
//         // Logger.error(JSON.stringify(error));
//         return res.status(400).json({
//           success: false,
//           message: "Something Went Wrong !!!",
//         });
//       });
//   };

module.exports = adminAuthController;
