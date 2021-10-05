const express = require("express");
const { createPayRoll, getPayRoll, getAllPayRoll, updatePayRoll, deletePayRoll } = require("../Controller/PayRoll.controller");
const router = express.Router();

router.post("/createpayroll", createPayRoll);
router.post("/getpayroll", getPayRoll);
router.get("/getallpayroll", getAllPayRoll);
router.put("/updatepayroll", updatePayRoll);
router.delete("/deletepayroll", deletePayRoll)

module.exports = router;