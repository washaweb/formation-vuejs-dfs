const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
  billNumber: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  client: { type: Object },
  prestations: { type: Array },
  discount: { type: Number },
  paid: { type: Number },
  tva: { type: Boolean },
  tvaRate: { type: Number }
})

module.exports = mongoose.model('Bill', billSchema)