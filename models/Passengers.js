const mongoose = require("mongoose")

const passengerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    bookings: { 
        type: Array,
        required: true 
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("passenger", passengerSchema);