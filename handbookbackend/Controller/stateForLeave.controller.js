// @ts-nocheck
const StateForLeave = require('../Models/StateForLeave')
const { Logger } = require('../utils/logger')

const stateForLeaveController = {}

stateForLeaveController.createStateForLeave = async (req, res) => {
  try {
    const { name } = req.body

    const stateForLeaves = new StateForLeave({
      name
    })

    await stateForLeaves.save()
    res.status(200).json({
      success: true,
      message: 'Created Successfully',
      data: stateForLeaves
    })
  } catch (error) {
    Logger.error(JSON.stringify(error))
    res.status(500).json({ success: false, error: JSON.stringify(error) })
  }
}

stateForLeaveController.getAllStateForLeave = async (req, res) => {
  try {
    const stateForLeaves = await StateForLeave.find().sort({ name: 1 })

    return res.status(200).json({
      success: true,
      data: stateForLeaves
    })
  } catch (error) {
    Logger.error(JSON.stringify(error))
    return res.status(400).json({
      success: false,
      error
    })
  }
}

stateForLeaveController.getStateForLeaveById = async (req, res) => {
  try {
    const { _id } = req.body
    const stateForLeave = await StateForLeave.findOne({ _id })
    if (!stateForLeave) {
      Logger.error('No state for leave found!')
      return res.status(400).json({
        success: false,
        error: 'No data found'
      })
    }
    return res.status(200).json({
      success: true,
      data: stateForLeave
    })
  } catch (error) {
    Logger.error(JSON.stringify(error))
    return res.status(400).json({
      success: false,
      error: 'No data found'
    })
  }
}

stateForLeaveController.updateStateForLeave = async (req, res) => {
  try {
    StateForLeave.findOne({ _id: req.body._id }, async (err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: 'stateforleave not found'
        })
      } else if (!stateForLeaveController) {
        return res.status(400).json({
          success: false,
          err: 'stateforleave is not exist'
        })
      }

      if (req.body.name) {
        data.name = req.body.name
      }

      await StateForLeave.findOneAndUpdate(
        { _id: req.body._id },
        data,
        (err, resp) => {
          if (err) {
            return res.status(400).json({
              success: false,
              err: 'stateforleave not update'
            })
          } else {
            return res.status(200).json({
              success: true,
              msg: 'stateforleave updated successfully',
              data: resp
            })
          }
        }
      )
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something wrong'
    })
  }
}

stateForLeaveController.deleteStateForLeave = async (req, res) => {
  try {
    const { _id } = req.body
    await StateForLeave.findOneAndDelete({ _id })
      .then(data => {
        return res.status(200).json({
          success: true,
          msg: 'data deleted successfully'
        })
      })
      .catch(err => {
        res.status(400).json({
          success: false,
          error: 'data is not found' || err
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something wrong'
    })
  }
}

// get Single Data
// exports.getCompanyStructureById = async (req, res) => {
//   try {
//     const id = req.params._id
//     const result = await CompanyStructure.findById(id)
//     res.status(200).send(result)

//     if (!result) {
//       return res.status(404).send()
//     } else {
//       res.send(result)
//     }
//   } catch (err) {
//     res.status(500).send('Error :', err)
//   }
// }

module.exports = stateForLeaveController
