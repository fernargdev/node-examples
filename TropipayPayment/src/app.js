const express = require('express')
const app = express()
app.disable('x-porwered-by')

const cors = require('cors')
app.use(cors())
app.use(express.json())

module.exports = app
