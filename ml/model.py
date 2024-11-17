import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import StandardScaler
import joblib

# Load the dataset
df = pd.read_csv('user_activity_dataset.csv')

# Drop unnecessary columns
df = df.drop(columns=['user_id', 'day', 'sessions'])

# Encode target variable
le = LabelEncoder()
df['engagement_level'] = le.fit_transform(df['engagement_level'])  # High = 2, Medium = 1, Low = 0

# Separate features and target variable
X = df.drop(columns=['engagement_level'])
y = df['engagement_level']

# Save feature names
feature_names = X.columns.tolist()

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LogisticRegression(max_iter=1000, class_weight='balanced')
model.fit(X_train_scaled, y_train)

y_pred = model.predict(X_test_scaled)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Save model, scaler, and feature names
joblib.dump(model, 'logistic_regression_model.pkl')
joblib.dump(scaler, 'scaler.pkl')
joblib.dump(feature_names, 'feature_names.pkl')  

print("Model, scaler, and feature names saved successfully.")
print("Feature names:", feature_names)

# coefficients = model.coef_  
# for i, class_coefficients in enumerate(coefficients):
#     print(f"Coefficients for class {i}:")
#     coef_with_names = dict(zip(feature_names, class_coefficients))
#     print(coef_with_names)
