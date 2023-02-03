const mongoose = require('mongoose')
const Schema = mongoose.Schema


const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    wallet: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('customer', customerSchema)