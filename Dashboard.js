import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/predictions")
      .then(response => setPredictions(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Irrigation Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Soil Moisture</th>
            <th>Weather</th>
            <th>Irrigation Needed</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((pred, index) => (
            <tr key={index}>
              <td>{new Date(pred.date).toLocaleDateString()}</td>
              <td>{pred.soilMoisture}</td>
              <td>{pred.weather}</td>
              <td>{pred.irrigationNeeded ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
