const express = require('express')
const cors = require('cors')

// const mongoose = require('mongoose')
// const path = require('path')

const billsRoutes = require('./routes/bills')

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:8080'
}))


// creation des routes de l'app
app.use('/bills', billsRoutes)

module.exports = app