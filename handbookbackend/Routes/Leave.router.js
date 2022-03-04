const express = require('express')
const { createLeaveSchema, 
    getLeaveSchema,
    getAllLeaveSchema, 
    deleteLeaveSchema, 
    updateLeaveSchema, 
    getLeaveSchemaByStateId} =require("../Controller/Leave.controller")

const router = express.Router()

router.post("/createleave", createLeaveSchema)
router.post("/getleave", getLeaveSchema)
router.get("/getallleave", getAllLeaveSchema)
router.delete("/deleteleave", deleteLeaveSchema)
router.put("/updateleave", updateLeaveSchema)
router.post("/getleaves", getLeaveSchemaByStateId)



module.exports=router
