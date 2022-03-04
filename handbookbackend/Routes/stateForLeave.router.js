const express = require("express");
const { createStateForLeave, getStateForLeaveById, getAllStateForLeave, updateStateForLeave, deleteStateForLeave, getStateForLeaveByStateId } = require("../Controller/stateForLeave.controller");
const stateForLeaveController = require('../Controller/stateForLeave.controller')
const { validateAdminToken } = require('../utils/jwt')
const router = express.Router();

router.post("/create", createStateForLeave);
router.post("/get", getStateForLeaveById);
router.get("/getall", getAllStateForLeave);
router.put("/update", updateStateForLeave);
router.delete("/delete", deleteStateForLeave);
// router.post("/getstate/Id", getStateForLeaveByStateId);

module.exports = router;
