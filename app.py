from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

reviews = [
    {"name": "Disha Goyal", "review": "Excellent treatment", "rating": 5},
    {"name": "Ashutosh", "review": "Very good behaviour", "rating": 5},
    {"name": "Rajkumar", "review": "Highly recommended", "rating": 5}
]

@app.route('/reviews', methods=['GET'])
def get_reviews():
    return jsonify(reviews)

if __name__ == '__main__':
    app.run(debug=True)
