import streamlit as st
import pandas as pd
import joblib

# Load the trained model and scaler
model = joblib.load("logistic_regression_model.pkl")
scaler = joblib.load("scaler.pkl")
feature_names = joblib.load("feature_names.pkl")  # Ensure this matches the trained model features

# Streamlit Dashboard
st.title("Personalized User Analytics Dashboard")

# Sidebar: Input user data
st.sidebar.header("Input User Data")
time_spent = st.sidebar.slider("Total Time Spent (minutes)", 0, 400, 450)
efficiency = st.sidebar.slider("Efficiency (%)", 0, 90, 80)
distractions = st.sidebar.slider("Distractions", 0, 5, 2)
active_sessions = st.sidebar.slider("Active Sessions", 0, 50, 15)
longest_session = st.sidebar.slider("Longest Session (minutes)", 0, 300, 120)
most_productive_session = st.sidebar.slider("Most Productive Session (minutes)", 0, 300, 120)
tasks_completed = st.sidebar.slider("Task Completed", 0, 10, 0)
tasks_pending = st.sidebar.slider("Task Pending", 0, 10, 5)

# Create a DataFrame for user input
user_data = pd.DataFrame({
    "time_spent": [time_spent],
    "tasks_completed": [tasks_completed],
    "tasks_pending": [tasks_pending],
    "efficiency": [efficiency],
    "distractions": [distractions],
    "active_sessions": [active_sessions],
    "longest_session": [longest_session],
    "most_productive_session": [most_productive_session]
})

st.write("### User Input Data")
st.write(user_data)

# Ensure the column order matches the model's training order
user_data = user_data[feature_names] 

# Scale the user input data
scaled_user_data = scaler.transform(user_data)

if st.button("Predict Engagement Level"):
    prediction = model.predict(scaled_user_data)
    print("Raw Prediction:", prediction)

    engagement_mapping = {0: "Low", 1: "Medium", 2: "High"}
    engagement_level = engagement_mapping[prediction[0]]
    
    st.write(f"## Predicted Engagement Level: **{engagement_level}**")

# Insights and Visualizations
st.write("### Insights")
st.write("""
This dashboard provides personalized insights based on your activity data:
- Track your productivity and engagement trends.
- Use the sliders on the left to input your weekly activity data.
""")

st.write("### Visualizations")
st.bar_chart(user_data.T)
