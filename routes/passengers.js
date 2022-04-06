const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();
const Passenger = require('../models/Passenger');
 

router.get("/passenger", async (req, res)=>{
    const passenger = await Booking.find({});
    const passengerNames = passenger.filter((obj)=>{
        return passengerNames.find(obj.passengerName);
    })
    res.json({passenger: passenger});
});

router.get("/passenger/:name", async (req, res)=>{
    const passenger = await Booking.find({passengerName: req.params.name});
    res.json({passenger: passenger});
});

module.exports = router;
 