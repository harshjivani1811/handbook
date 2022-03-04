const express = require('express')
const router = express.Router()

// router.use('/auth', require('./auth.router.js'))
router.use('/generalInfo', require('./GeneralInformation.router'))
router.use('/payroll', require('./PayRoll.router'))
router.use('/state', require('./State.router'))
router.use('/holidaypay', require('./HolidayPay.router'))
router.use('/fireexit', require('./FireExit.router'))
router.use('/companystructure', require('./CompanyStructure.router'))
router.use('/companyvehicles', require('./CompanyVehicles.router'))
router.use('/auth', require('./auth.router'))
router.use('/user', require('./user.router'))
router.use('/stateforleave', require('./stateForLeave.router'))
router.use('/documents', require('./Documents.router'))
router.use('/leave', require('./Leave.router'))
router.use('/pdf', require('./pdfGetData.router'))

module.exports = router
