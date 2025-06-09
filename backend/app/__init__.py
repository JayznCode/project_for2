from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})  # CORS 전체 허용 or 제한 가능

    from .routes import main
    app.register_blueprint(main)

    return app

