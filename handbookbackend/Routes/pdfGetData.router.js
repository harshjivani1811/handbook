const express = require('express')
const { getAllPdfDataByUserId } = require('../Controller/pdfData.controller')
const router = express.Router()

router.post('/get', getAllPdfDataByUserId)

module.exports = router
