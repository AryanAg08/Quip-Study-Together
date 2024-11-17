import random
import pandas as pd
from datetime import datetime, timedelta

# Configuration
NUM_USERS = 50
DAYS = 30  # Number of days to simulate

# Generate random user activity data
data = []

for user_id in range(1, NUM_USERS + 1):
    for day_offset in range(DAYS):
        current_day = (datetime.now() - timedelta(days=day_offset)).strftime('%Y-%m-%d')
        
        time_spent = random.randint(30, 300)  # Random time spent (30 mins to 5 hours)
        num_sessions = random.randint(1, 5)  # Number of sessions
        session_durations = [random.randint(10, 120) for _ in range(num_sessions)]  # Session durations
        
        tasks_completed = random.randint(0, 10)
        tasks_pending = random.randint(0, 5)
        efficiency = random.randint(50, 100)  # Productivity score (50-100)
        distractions = random.randint(0, 3)  # Number of distractions
        
        active_sessions = len(session_durations)
        longest_session = max(session_durations)
        most_productive_session = random.choice(session_durations)
        
        data.append({
            "user_id": f"user_{user_id}",
            "day": current_day,
            "time_spent": time_spent,
            "sessions": session_durations,
            "tasks_completed": tasks_completed,
            "tasks_pending": tasks_pending,
            "efficiency": efficiency,
            "distractions": distractions,
            "active_sessions": active_sessions,
            "longest_session": longest_session,
            "most_productive_session": most_productive_session,
        })

# Convert to DataFrame
df = pd.DataFrame(data)

# Define Engagement Levels
df['engagement_level'] = pd.qcut(df['time_spent'], q=3, labels=["Low", "Medium", "High"])

# Save to CSV
df.to_csv("user_activity_dataset_with_engagement.csv", index=False)
print("Updated dataset saved with engagement levels!")
