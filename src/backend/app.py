import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from werkzeug.utils import secure_filename
from models import db, User

# Definir ruta absoluta para la base de datos y carpeta de uploads
basedir = os.path.abspath(os.path.dirname(__file__))
UPLOAD_FOLDER = os.path.join(basedir, "uploads")

# Crear la carpeta uploads si no existe
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)

# Configuración de base de datos SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db.init_app(app)

# Crear la base de datos al iniciar
with app.app_context():
    db.create_all()


# Ruta para registrar usuario con foto
@app.route("/register", methods=["POST"])
def register():
    username = request.form.get("username")
    email = request.form.get("email")
    password = request.form.get("password")
    avatar_file = request.files.get("avatar")  # Archivo de imagen

    if not username or not email or not password:
        return jsonify({"error": "Faltan datos"}), 400

    # Encriptar contraseña antes de guardarla
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')


    # Guarda imagen del avatar si la hay
    avatar_filename = None
    if avatar_file:
        filename = secure_filename(avatar_file.filename)
        avatar_filename = f"{username}_{filename}"
        avatar_path = os.path.join(app.config["UPLOAD_FOLDER"], avatar_filename)
        avatar_file.save(avatar_path)

    # Crear usuario y guardarlo en la base de datos
    new_user = User(username=username, email=email, password=hashed_password, avatar=avatar_filename)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registro recibido", "user": new_user.to_dict()}), 201


# Ruta para login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Faltan datos"}), 400

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        return jsonify({'message': 'Login exitoso', 'user': user.to_dict()})
    else:
        return jsonify({'message': 'Email o contraseña incorrectos'}), 401
 

# Ruta para servir imágenes de perfil
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
