const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
 

router.post("/booking", async (req, res)=>{
    try {
        const booking = new Booking(req.body);
        const booked = booking.save();
        res.json({booked: booked});
    } catch (err) {
        res.json({ message: `booking didn't completed due to ${err}` });
    }
    
})

module.exports = router;
 