const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const bank = mongoose.model("bank", transactionSchema)
module.exports = bank