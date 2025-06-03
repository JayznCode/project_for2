from flask import Flask

def create_app():
    app = Flask(__name__)

    from .routes import main  # main은 Blueprint 객체
    app.register_blueprint(main)

    return app

