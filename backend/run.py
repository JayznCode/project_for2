# run.py
from app import create_app
from flask_cors import CORS

app = create_app()
CORS(app)  # 모든 도메인 허용 (개발용)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

