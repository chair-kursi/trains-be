const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
 

router.post("/booking", async (req, res)=>{
    try {
        const booking = new Booking(req.body);
        const passengerName = req.body.passengerName; 
        const noOfBookings = await Booking.find({passengerName: passengerName});
        if(noOfBookings.length==6){
            res.send("Already done 6 Bookings!!");
        }
        const booked = await booking.save();
        res.json({booked: booked});
    } catch (err) {
        res.json({ message: `booking didn't completed due to ${err}` });
    } 
})

router.get("/passenger", async (req, res)=>{
    const passenger = await Booking.find({});
    var passengerNames = [];
    passengerNames = passenger.map((obj)=>{
        var passName = passengerNames.find(ele=>{  
            return ele===obj.passengerName;
        });   
        if(passName)
        return null;
        passengerNames = [...passengerNames, obj.passengerName];
        console.log(passengerNames + passName);
        return obj.passengerName;
    });
    res.json({passengerNames});
}); 

router.get("/passenger/:name", async (req, res)=>{
    const passenger = await Booking.find({passengerName: req.params.name});
    res.json(passenger);
});

module.exports = router;