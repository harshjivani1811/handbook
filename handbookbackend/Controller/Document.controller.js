const Documents = require('../Models/Form/Documents')

exports.add = (req, res) => {
  const doc = new Documents({
    documents: req.file.filename
  })
  try {
    doc.save().then(() =>
      res.status(201).send({
        status: true,
        message: 'Document Uploaded Successfully',
        data: doc,
        profile_url: `http://localhost:8000/documents/${req.file.filename}`
      })
    )
    console.log(doc)
  } catch (err) {
    res.status(400).send({ message: 'Document not Saved', error: err })
  }
}

exports.getAll = async (req, res) => {
  try {
    const newData = await Documents.find({})
    const totalDocuments = await Documents.find({}).countDocuments()

    return res.status(200).send({
      status: true,
      Total: totalDocuments,
      message: 'Fetched From Server',
      data: newData
    })
  } catch (err) {
    res.status(404).json({ status: false, message: 'Files Not Available' })
  }
}

exports.getById = async (req, res) => {
  try {
    const { _id } = req.body
    await Documents.findById({ _id }, (err, newData) => {
      if (err) {
        return res
          .status(404)
          .json({ status: false, message: 'This file is not available' })
      } else {
        res.status(200).send({
          status: true,
          message: 'Record from Database',
          data: newData
        })
      }
    })
  } catch (err) {
    res.status(500).send({ status: false, message: err })
  }
}

// Not Complete
exports.update = (req, res) => {
  try {
    const { _id } = req.body
  } catch (err) {
    res
      .status(400)
      .send({ status: false, message: 'File not found', data: err.message })
  }
}

exports.delete = async (req, res) => {
  const { _id } = req.body
  try {
    const deleteData = await Documents.findByIdAndDelete(_id)
    return res.status(200).send({
      status: true,
      message: 'Record Deleted Successfully',
      data: deleteData
    })
  } catch (err) {
    res
      .status(400)
      .send({ status: false, message: 'File not found', data: err.message })
  }
}
