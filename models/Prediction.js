const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    soilMoisture: Number,
    weather: String,
    irrigationNeeded: Boolean
});

module.exports = mongoose.model('Prediction', PredictionSchema);
