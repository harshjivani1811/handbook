const express = require('express')
const {createCompanyStructure, getCompanyStructure, getAllCompanyStructure, updateCompanyStructure, deleteCompanyStructure} = 
require("../Controller/CompanyStructure.controller")
const router = express.Router()

router.post("/createstructure", createCompanyStructure)
router.post('/getstructure', getCompanyStructure)
router.get('/getallstructure', getAllCompanyStructure)
router.put('/updatestructure', updateCompanyStructure)
router.delete('/deletestructure', deleteCompanyStructure)

module.exports = router
