require('dotenv').config()
const bodyParser = require('body-parser')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Routes/index.router')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(data => {
    console.log('DB connected!')
  })
  .catch(error => {
    console.log(error)
  })

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(compression())
app.use(bodyParser.json())

app.use('/api', routes)
app.use('/documents', express.static('upload/documents'))

const port = 8000
app.listen(port, () => {
  console.log('Server is listening at ', port)
})
