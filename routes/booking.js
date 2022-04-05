const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
 

router.post("/booking", async (req, res)=>{
    try {
        const booking = new Booking(req.body);
        const passengerName = req.body.passengerName;
        const existingPassenger = Booking.findOne({passengerName: passengerName});
        if(existingPassenger){
            try{
                Booking.updateOne({passengerName: passengerName}, {booking: [...existingPassenger.booking, req.body.booking]});
                res.send("Train Booked");
            }catch(err){
                res.send(`Booking failed due to ${err}`);
            }
            return;
        }
        const booked = await booking.save();
        res.json({booked: booked});
    } catch (err) {
        res.json({ message: `booking didn't completed due to ${err}` });
    } 
})

module.exports = router;
 