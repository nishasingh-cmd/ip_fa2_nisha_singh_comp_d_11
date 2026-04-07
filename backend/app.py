import os
print("RUNNING FILE:", os.path.abspath(__file__))
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ✅ ALL REVIEWS (FIXED + CLEAN)
reviews = [
    {
        "name": "Disha Goyal",
        "review": "Dr. Gaurav is caring, knowledgeable, and attentive. Excellent treatment and a very positive experience overall.",
        "rating": 5
    },
    {
        "name": "Ashutosh",
        "review": "Best neurosurgeon in Udaipur. Very good behaviour and treatment.",
        "rating": 5
    },
    {
        "name": "Rajkumar",
        "review": "I highly recommend Dr. Gaurav Gupta sir to anyone looking for a neurosurgeon.",
        "rating": 5
    },
    {
        "name": "Neha",
        "review": "I am truly grateful to Dr. Gaurav Gupta. He diagnosed my condition accurately.",
        "rating": 5
    },
    {
        "name": "Dev Singh",
        "review": "Dr. Gaurav sir is a dedicated and highly skilled neurosurgeon. I truly appreciate the care and precision throughout the treatment process.",
        "rating": 5
    },
    {
        "name": "Bhupesh",
        "review": "Very good and very effective treatment of Dr. Gaurav Gupta sir in neurosurgery.",
        "rating": 5
    },
    {
        "name": "Shyam",
        "review": "Dr. Gaurav Gupta is a highly skilled spine surgeon who truly listens to patients. He explains patient condition in detail and gives effective treatment.",
        "rating": 5
    },
    {
        "name": "Akash",
        "review": "Dr. Gaurav Gupta sir is very patient-friendly, highly knowledgeable, always available and committed to patients.",
        "rating": 5
    },
    {
        "name": "Dr Rohan",
        "review": "Dedicated surgeon, good human being and very helpful senior Dr. Gaurav Gupta sir.",
        "rating": 5
    },
    {
        "name": "Kritika Goyal",
        "review": "A good doctor and a great human being. Do visit and consult him for neuro problems.",
        "rating": 5
    }
]

# ✅ API ROUTE
@app.route('/reviews', methods=['GET'])
def get_reviews():
    return jsonify(reviews)

# ✅ RUN SERVER
if __name__ == '__main__':
    app.run(debug=True)
    print("NEW VERSION RUNNING")
