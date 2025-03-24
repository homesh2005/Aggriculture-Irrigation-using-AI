from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open("irrigation_model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    soil_moisture = data["soil_moisture"]
    weather = data["weather"]  # 1 = Rainy, 0 = Sunny

    prediction = model.predict(np.array([[soil_moisture, weather]]))[0]

    return jsonify({"irrigation_needed": bool(prediction)})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
