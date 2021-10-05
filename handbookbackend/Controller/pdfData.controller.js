const GeneralInformation = require('../Models/Form/GeneralInformation')
const State = require('../Models/Form/State')
const CompanyStructure = require('../Models/Form/CompanyStructure')
const FireExit = require('../Models/Form/FireExit')
const PayRoll = require('../Models/Form/PayRoll')
const CompanyVehicles = require('../Models/Form/CompanyVehicles')
const HolidayPay = require('../Models/Form/HolidayPay')

exports.getAllPdfDataByUserId = async (req, res) => {
  try {
    const { userId } = req.body
    // General Info data
    GeneralInformation.findOne({ userId })
      .then(genInfo => {
        if (genInfo.length === 0) {
          return res.status(400).json({
            success: false,
            err: 'No data available'
          })
        }
        // State data
        State.findOne({ userId })
          .then(stateInfo => {
            if (stateInfo.length === 0) {
              return res.status(400).json({
                success: false,
                err: 'No state data available'
              })
            }
            // Company structure data
            CompanyStructure.findOne({ userId })
              .then(companyStructureInfo => {
                if (companyStructureInfo.length === 0) {
                  return res.status(400).json({
                    success: false,
                    err: 'No company structure data available'
                  })
                }
                // Fire exit data
                FireExit.findOne({ userId })
                  .then(fireExitInfo => {
                    if (fireExitInfo.length === 0) {
                      return res.status(400).json({
                        success: false,
                        err: 'No fireExit data available'
                      })
                    }
                    // Pay roll data
                    PayRoll.findOne({ userId })
                      .then(payRollInfo => {
                        if (payRollInfo.length === 0) {
                          return res.status(400).json({
                            success: false,
                            err: 'No payRoll data available'
                          })
                        }
                        // Company vehicles data
                        CompanyVehicles.findOne({ userId })
                          .then(companyVehiclesInfo => {
                            if (companyVehiclesInfo.length === 0) {
                              return res.status(400).json({
                                success: false,
                                err: 'No company vehicles data available'
                              })
                            }

                            // Holiday pay data
                            HolidayPay.findOne({ userId })
                              .then(holidayPayInfo => {
                                if (holidayPayInfo.length === 0) {
                                  return res.status(400).json({
                                    success: false,
                                    err: 'No holiday pay data available'
                                  })
                                }

                                // Sending final data
                                return res.status(200).json({
                                  success: true,
                                  data: {
                                    GeneralInformation: genInfo,
                                    State: stateInfo,
                                    CompanyStructure: companyStructureInfo,
                                    FireExit: fireExitInfo,
                                    PayRoll: payRollInfo,
                                    CompanyVehicles: companyVehiclesInfo,
                                    HolidayPay: holidayPayInfo
                                  }
                                })
                              })
                              .catch(error => {
                                if (genInfo.length === 0) {
                                  return res.status(400).json({
                                    success: false,
                                    err:
                                      'No holiday pay data available' || error
                                  })
                                }
                              })
                          })
                          .catch(error => {
                            if (genInfo.length === 0) {
                              return res.status(400).json({
                                success: false,
                                err:
                                  'No company vehicles data available' || error
                              })
                            }
                          })
                      })
                      .catch(error => {
                        if (genInfo.length === 0) {
                          return res.status(400).json({
                            success: false,
                            err: 'No payRoll data available' || error
                          })
                        }
                      })
                  })
                  .catch(error => {
                    if (genInfo.length === 0) {
                      return res.status(400).json({
                        success: false,
                        err: 'No fireExit data available' || error
                      })
                    }
                  })
              })
              .catch(error => {
                if (genInfo.length === 0) {
                  return res.status(400).json({
                    success: false,
                    err: 'No company structure data available' || error
                  })
                }
              })
          })
          .catch(error => {
            if (genInfo.length === 0) {
              return res.status(400).json({
                success: false,
                err: 'No state data available' || error
              })
            }
          })
      })
      .catch(error => {
        return res.status(400).json({
          success: false,
          err: 'No general information found' || error
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: 'something is wrong' || error
    })
  }
}
