const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://washaweb:Ej.wQBrVU9fVWw@promotheuscluster.lpqrf.mongodb.net/ifa-bills-app?retryWrites=true&w=majority',
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