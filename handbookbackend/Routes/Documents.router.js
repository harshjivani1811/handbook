const express = require('express')
const router = express.Router()
const Documents = require('../Controller/Document.controller')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: 'upload/documents',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    )
  }
})

const upload = multer({
  storage: storage
})

router.get('/getAll', Documents.getAll)
router.post('/getById', Documents.getById)
router.post('/addData', upload.single('documents'), Documents.add)
router.put('/updateData', Documents.update)
router.delete('/deleteData', Documents.delete)

module.exports = router
