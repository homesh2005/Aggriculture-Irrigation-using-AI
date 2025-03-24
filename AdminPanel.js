import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [soilMoisture, setSoilMoisture] = useState("");
  const [weather, setWeather] = useState("");

  const handlePredict = async () => {
    const response = await axios.post("http://localhost:5001/predict", {
      soil_moisture: Number(soilMoisture),
      weather: Number(weather)
    });

    const irrigationNeeded = response.data.irrigation_needed;
    await axios.post("http://localhost:5000/api/predictions", {
      soilMoisture,
      weather: weather === "1" ? "Rainy" : "Sunny",
      irrigationNeeded
    });

    alert(`Irrigation Needed: ${irrigationNeeded ? "Yes" : "No"}`);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <label>Soil Moisture:</label>
      <input type="number" value={soilMoisture} onChange={(e) => setSoilMoisture(e.target.value)} />

      <label>Weather (0 = Sunny, 1 = Rainy):</label>
      <input type="number" value={weather} onChange={(e) => setWeather(e.target.value)} />

      <button onClick={handlePredict}>Predict & Save</button>
    </div>
  );
}

export default AdminPanel;
