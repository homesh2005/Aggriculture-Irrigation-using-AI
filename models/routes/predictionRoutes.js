const express = require('express');
const Prediction = require('../models/Prediction');
const router = express.Router();

// Fetch all predictions
router.get('/', async (req, res) => {
    const predictions = await Prediction.find();
    res.json(predictions);
});

// Add a new prediction
router.post('/', async (req, res) => {
    const { soilMoisture, weather, irrigationNeeded } = req.body;
    const newPrediction = new Prediction({ soilMoisture, weather, irrigationNeeded });
    await newPrediction.save();
    res.json(newPrediction);
});

module.exports = router;
