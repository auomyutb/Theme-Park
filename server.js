const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

//////////////////////////

const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()
require('./db')

const PORT = process.env.PORT || 3000

const RideRouter = require('./routes/RideRouter')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/rides', RideRouter)

app.get('/', (req, res) => {
  res.send('Theme Park Running ')
})

app.listen(PORT, () => {
  console.log(`My Server is running on port ${PORT} `)
})
