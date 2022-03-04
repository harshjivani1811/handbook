const express = require("express");
const { createCompanyVehicles, getCompanyVehicles, getAllCompanyVehicles, updateCompanyVehicles, deleteCompanyVehicles } = require("../Controller/CompanyVehicles.controller");
const router = express.Router();

router.post("/createcompanyvehicles" ,createCompanyVehicles);
router.post("/getcompanyvehicles" , getCompanyVehicles);
router.get("/getallcompanyvehicles" , getAllCompanyVehicles);
router.put("/updatecompanyvehicles" , updateCompanyVehicles );
router.delete("/deletecompanyvehicles" , deleteCompanyVehicles);

module.exports = router;