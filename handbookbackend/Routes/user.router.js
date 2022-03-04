const express = require("express");
const userController = require('../Controller/user.controller')
const { validateAdminToken } = require('../utils/jwt')
const router = express.Router();

router.post("/create", userController.createUser);
router.get("/get/all", validateAdminToken, userController.getAllUser);
router.delete("/delete", validateAdminToken, userController.deleteUser);
router.post("/get", validateAdminToken, userController.getUserById);
router.put("/update", validateAdminToken, userController.updateUser);

module.exports = router;
