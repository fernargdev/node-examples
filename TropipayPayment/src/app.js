const express = require('express')
const app = express()
app.disable('x-porwered-by')

const cors = require('cors')
app.use(cors())
app.use(express.json())

const publicRoutes = require('./routes/public.routes')
app.use('/', publicRoutes)

module.exports = app
