
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Sample dataset
data = {
    "soil_moisture": [30, 40, 50, 20, 70, 90, 60, 80],
    "weather": [1, 0, 1, 0, 1, 0, 1, 0],  # 1 = Rainy, 0 = Sunny
    "irrigation_needed": [1, 1, 0, 1, 0, 0, 0, 0]  # 1 = Yes, 0 = No
}

df = pd.DataFrame(data)

# Train the model
X = df[["soil_moisture", "weather"]]
y = df["irrigation_needed"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
with open("irrigation_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved as irrigation_model.pkl")
