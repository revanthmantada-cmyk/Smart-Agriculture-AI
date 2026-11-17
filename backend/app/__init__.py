import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

def create_app():
    load_dotenv()

    app = Flask(__name__)

    # Allow React frontend to communicate with Flask
    CORS(app, resources={
        r"/api/*": {
            "origins": [
                "http://localhost:5173",
                "http://127.0.0.1:5173"
            ]
        }
    })

    # Register blueprints
    from .routes.health import health_bp
    app.register_blueprint(health_bp, url_prefix='/api')
    from .routes.soil import soil_bp
    app.register_blueprint(soil_bp, url_prefix='/api')

    return app