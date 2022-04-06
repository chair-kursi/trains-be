const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
 

router.post("/booking", async (req, res)=>{
    try {
        const booking = new Booking(req.body);
        const passengerName = req.body.passengerName; 
        const noOfBookings = await Booking.find({passengerName: passengerName});
        if(noOfBookings.length>=6){
            res.send("Already done 6 Bookings!!");
            return;
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
        if(!passName) {
            passengerNames = [...passengerNames, obj.passengerName]; 
            return obj.passengerName;
        }
    });
    passengerNames = passengerNames.filter((ele)=>{return ele!==null}).map(ele=>{return ele});
    res.json({passengerNames});
}); 

router.get("/passenger/:name", async (req, res)=>{
    const passenger = await Booking.find({passengerName: req.params.name});
    res.json(passenger);
});

module.exports = router;