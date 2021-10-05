const express = require ("express");
const { createHolidayPay, updateHolidayPay, deleteHolidayPay, getHolidaypay, getAllHolidayPay } = require("../Controller/HolidayPay.controller");
const router = express.Router();


router.post("/createholidaypay" , createHolidayPay);
router.post("/getholidaypay" , getHolidaypay);
router.get("/getallholidaypay" , getAllHolidayPay);
router.put("/updateholidaypay", updateHolidayPay);
router.delete("/deleteholidaypay" , deleteHolidayPay);

module.exports = router;