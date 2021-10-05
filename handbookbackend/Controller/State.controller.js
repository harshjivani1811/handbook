// @ts-nocheck
const mongoose = require('mongoose')
const State = require('../Models/Form/State')
const StateForLeave = require('../Models/StateForLeave')

exports.createState = async (req, res) => {
  try {
    const { userId, state } = req.body
    if (!userId || !state) {
      return res.status(400).json({
        success: false,
        error: 'please select all of this'
      })
    } else {
      // console.log("testede");
      const stateData = new State(req.body)
      await stateData
        .save()
        .then(data => {
          if (data) {
            return res.status(200).json({
              success: true,
              data: stateData
            })
          }
        })
        .catch(() => {
          return res.status(400).json({
            success: false,
            error: 'state is not found'
          })
        })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something is wrong'
    })
  }
}

exports.getState = async (req, res) => {
  try {
    const { _id } = req.body
    State.findOne({ _id }, (err, stateData) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: 'state is not found'
        })
      } else {
        return res.status(200).json({
          success: true,
          data: stateData
        })
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: 'something is wrong'
    })
  }
}

exports.getAllState = async (req, res) => {
  try {
    const stateData = await State.find({}).sort(['state', 1])
    return res.status(200).json({
      success: true,
      data: stateData
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something wrong'
    })
  }
}

exports.updateState = async (req, res) => {
  try {
    State.findOne({ _id: req.body._id }, async (err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: 'state not found'
        })
      }
      if (req.body.state) {
        data.state = req.body.state
      }

      await State.findOneAndUpdate({ _id: req.body._id }, data, (err, resp) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: 'state not found'
          })
        } else {
          return res.status(200).json({
            success: true,
            data: data
          })
        }
      })
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'state not found'
    })
  }
}

exports.deleteState = async (req, res) => {
  try {
    const { _id } = req.body
    await State.findOneAndDelete({ _id })
      .then(data => {
        if (data) {
          return res.status(200).json({
            success: true,
            msg: 'state deleted'
          })
        }
      })
      .catch(err => {
        return res.status(200).json({
          success: false,
          msg: 'state is not Deleted' || err
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something is wrong'
    })
  }
}

exports.getstatePDF = async (req, res) => {
  StateForLeave.aggregate([
    {
      $lookup: {
        from: 'leaves',
        as: 'Leave',
        let: { stateId: '$_id' },
        pipeline: [
          {
            $match: { $expr: { $eq: ['$stateId', '$$stateId'] } }
          },
          {
            $project: {
              _id: 1,
              name: 1,
              title: 1,
              description: 1,
              stateId: 1
            }
          }
        ]
      }
    }
  ]).exec((err, result) => {
    if (err) {
      res.send({ messege: err })
    }
    if (result) {
      res.send({ data: result })
    }
  })
}

exports.LeavesOfState = async (req, res) => {
  const { _id } = req.body
  mongoose
    .model('Leave')
    .find({ stateId: _id })
    .populate({
      path: 'stateId'
    })
    .exec(function (err, results) {
      if (err) {
        res.status(400).json({ success: false, message: err })
      } else {
        res.status(201).json({ success: true, data: results })
      }
    })
}
