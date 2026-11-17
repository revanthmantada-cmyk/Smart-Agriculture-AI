from flask import Blueprint, request, jsonify

soil_bp = Blueprint('soil', __name__)

@soil_bp.route('/soil/analyze', methods=['POST'])
def analyze_soil():

    data = request.get_json()

    if not data:
        return jsonify({"error": "No input data provided"}), 400

    try:
        nitrogen = float(data.get('nitrogen', 0))
        phosphorus = float(data.get('phosphorus', 0))
        potassium = float(data.get('potassium', 0))
        ph = float(data.get('ph', 7))

        if min(nitrogen, phosphorus, potassium) < 0:
            return jsonify({"error": "NPK values cannot be negative"}), 400

        if not 0 <= ph <= 14:
            return jsonify({"error": "pH must be between 0 and 14"}), 400

        return jsonify({
            "status": "success",
            "message": "Soil data received successfully",
            "input": {
                "nitrogen": nitrogen,
                "phosphorus": phosphorus,
                "potassium": potassium,
                "ph": ph
            },
            "note": "This is input validation only, not a scientific soil-health prediction."
        })

    except (ValueError, TypeError):
        return jsonify({"error": "Please provide valid numeric values"}), 400