const express = require('express')
const {
  createState,
  getState,
  getAllState,
  updateState,
  deleteState,
  getstatePDF,
  LeavesOfState
} = require('../Controller/State.controller')
const router = express.Router()

router.post('/createstate', createState)
router.post('/getstate', getState)
router.get('/getallstate', getAllState)
router.put('/updatestate', updateState)
router.delete('/deletestate', deleteState)
router.get('/getStatePDF', getstatePDF)
router.post('/get-state-pdf', LeavesOfState)
module.exports = router
