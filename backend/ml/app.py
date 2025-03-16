from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

# ✅ Define the custom tokenizer function BEFORE loading the model
def custom_tokenizer(text):
    return text.split(';')

app = Flask(__name__)
CORS(app)

# ✅ Load the model with the correct tokenizer
pipeline = joblib.load('career_model.pkl')
label_encoder = joblib.load('label_encoder.pkl')

@app.route('/')
def home():
    return "Career Recommendation API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        skills = data['skills']
        age = data['age']

        input_df = pd.DataFrame([[skills, age]], columns=['Skills', 'Age'])

        predicted_label = pipeline.predict(input_df)[0]
        career = label_encoder.inverse_transform([predicted_label])[0]

        return jsonify({'Recommended_Career': career})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
