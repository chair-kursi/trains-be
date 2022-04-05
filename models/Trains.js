const mongoose = require("mongoose")

const trainSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    stops: { 
        type: Array,
        required: true 
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("trains", trainSchema);