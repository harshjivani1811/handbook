const express = require('express')
const GeneralInformation = require('../Controller/GeneralInformation.controller')
const router = express.Router()

router.get('/getAll', GeneralInformation.getAllData)
router.post('/getById', GeneralInformation.getDataById)
router.post('/addData', GeneralInformation.addData)
router.put('/updateData', GeneralInformation.updateData)
router.delete('/deleteData', GeneralInformation.deleteData)

module.exports = router
