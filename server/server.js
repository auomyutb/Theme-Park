const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

require('dotenv').config()
require('./db')

const RideRouter = require('./routes/RideRouter')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/rides', RideRouter)

app.get('/', (req, res) => {
  res.send('Theme Park API ')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})