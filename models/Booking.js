const mongoose = require("mongoose")

const passengerSchema = mongoose.Schema({
    passengerName: {
        type: String,
        required: true
    }, 
    booking :{
        type: Array,
        trainNumber: {
            type: Number,
            required: true
        },
        from:{
            type: String,
            required: true
        },
        to:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            required: true
        } 
    }, 
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("booking", passengerSchema);