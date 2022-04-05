const express = require('express');
const router = express.Router();
const Passenger = require('../models/Passenger');
 

router.get("/passenger", async (req, res)=>{
    const passenger = await Passenger.find({});
    res.json({passenger: passenger});
})

module.exports = router;
 