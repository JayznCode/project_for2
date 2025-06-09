from flask import Blueprint, render_template, request, redirect, url_for, jsonify

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'admin' and password == '1234':
            return redirect(url_for('main.dashboard'))
        else:
            return render_template('index.html', error="Invalid credentials")
    return render_template('index.html')

@main.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# 여기에 새로운 API 엔드포인트 추가
@main.route('/api/data')
def get_data():
    data = {
        "message": "Hello from Flask API!",
        "status": "success"
    }
    return jsonify(data)

