from model import model, scaler
import pandas as pd
test_data = pd.DataFrame({
    "time_spent": [100, 200, 400],
    "tasks_completed": [1, 5, 10],
    "tasks_pending": [2, 3, 5],
    "efficiency": [50, 75, 90],
    "distractions": [3, 2, 1],
    "active_sessions": [5, 10, 15],
    "longest_session": [60, 90, 120],
    "most_productive_session": [30, 50, 90]
})
test_scaled = scaler.transform(test_data)
print("Predictions:", model.predict(test_scaled))
