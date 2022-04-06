const express = require('express'); 
const router = express.Router();
const Trains = require('../models/Trains');

router.post("/trains", async (req, res) => {
    try {
        const train = new Trains(req.body);
        const savedTrain = await train.save();
        res.json({ savedTrain: savedTrain, error: null });
    } catch (err) {
        res.json({ message: `train didn't saved due to ${err}` });
    }
})

router.get("/trains", async (req, res)=>{
    const trains = await Trains.find({});
    res.json({trains: trains});
});

router.get("/stops/:trainNo", async (req, res)=>{
    var stops = await Trains.findOne({number: req.params.trainNo}); 
    res.json(stops.stops);    
});

module.exports = router;


// {
//     "name": "Bihar Express",
//     "number": 17967,
//     "stops": ["nagpur","firozpur", "bhaad mein", "ganganagar", "delhi", "mathura", "dehradun", "mandi", "chandigarh", "lonavala", "stopa", "stopy", "stopc"]
// }