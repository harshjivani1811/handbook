// @ts-nocheck
const GeneralInformation = require('../Models/Form/GeneralInformation')

exports.addData = async (req, res) => {
  const info = new GeneralInformation({
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    noOfEmployees: req.body.noOfEmployees,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    document: req.body.document
  })

  const {
    userId,
    firstName,
    lastName,
    companyName,
    noOfEmployees,
    streetAddress,
    city,
    state,
    zipcode,
    phonenumber,
    email,
    document
  } = info

  try {
    if (
      !userId ||
      !firstName ||
      !lastName ||
      !companyName ||
      !noOfEmployees ||
      !streetAddress ||
      !city ||
      !state ||
      !zipcode ||
      !phonenumber ||
      !email ||
      !document
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please include all fields',
        error: true
      })
    } else {
      info
        .save()
        .then(result => {
          console.log(result)
          res.status(201).json({
            success: 1,
            data: result
          })
        })
        .catch(err => {
          res.status(400).json({ message: 'Something is Missing', err: err })
        })
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: 'Something is wrong'
    })
  }
}

exports.getAllData = async (req, res) => {
  try {
    const allData = await GeneralInformation.find({})
    const totalRecords = await GeneralInformation.find({}).countdocuments()

    return res.status(200).json({
      success: true,
      TotalRecords: totalRecords,
      message: 'All Data from Server',
      data: allData
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'No Information found'
    })
  }
}

exports.getDataById = (req, res) => {
  try {
    const { _id } = req.body
    GeneralInformation.findOne({ _id }, (err, respo) => {
      if (err) {
        console.log(err)
        return res.status(400).json({
          success: false,
          err: 'No General Information found'
        })
      } else if (!GeneralInformation) {
        return res.status(400).json({
          success: false,
          err: 'General Information not found'
        })
      } else {
        return res.status(200).json({
          success: true,
          data: respo
        })
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something wrong'
    })
  }
}

exports.updateData = async (req, res) => {
  GeneralInformation.findOne({ _id: req.body._id }, async (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: 'Information not found'
      })
    }
    if (req.body.firstName) {
      data.firstName = req.body.firstName
    }
    if (req.body.lastName) {
      data.lastName = req.body.lastName
    }
    if (req.body.companyName) {
      data.companyName = req.body.companyName
    }
    if (req.body.streetAddress) {
      data.streetAddress = req.body.streetAddress
    }
    if (req.body.city) {
      data.city = req.body.city
    }
    if (req.body.state) {
      data.state = req.body.state
    }
    if (req.body.zipcode) {
      data.zipcode = req.body.zipcode
    }
    if (req.body.phonenumber) {
      data.phonenumber = req.body.phonenumber
    }
    if (req.body.email) {
      data.email = req.body.email
    }
    if (req.body.document) {
      data.document = req.body.document
    }
    await GeneralInformation.findOneAndUpdate(
      { _id: req.body._id },
      data,
      (err, resp) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: 'info not found'
          })
        } else {
          return res.status(200).json({
            success: true,
            data: resp
          })
        }
      }
    )
  })
}

exports.deleteData = async (req, res) => {
  try {
    const { _id } = req.body
    await GeneralInformation.findOneAndDelete({ _id })
      .then(data => {
        if (data) {
          return res.status(200).json({
            success: true,
            msg: 'info deleted successfully'
          })
        }
      })
      .catch(err => {
        return res.status(200).json({
          success: false,
          msg: 'info is not Deleted'
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'something is wrong'
    })
  }
}
