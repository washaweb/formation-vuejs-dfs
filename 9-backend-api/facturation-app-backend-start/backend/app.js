require('dotenv').config()
const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
const cluster = process.env.MONGO_CLUSTER
const db = process.env.MONGO_DB

mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}/${db}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

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