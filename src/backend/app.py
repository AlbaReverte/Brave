# import os
# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# from flask_bcrypt import Bcrypt
# from werkzeug.utils import secure_filename
# from models import db, User


# basedir = os.path.abspath(os.path.dirname(__file__))
# UPLOAD_FOLDER = os.path.join(basedir, "uploads")


# if not os.path.exists(UPLOAD_FOLDER):
#     os.makedirs(UPLOAD_FOLDER)

# app = Flask(__name__)
# CORS(app)
# bcrypt = Bcrypt(app)


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# db.init_app(app)


# with app.app_context():
#     db.create_all()



# @app.route("/register", methods=["POST"])
# def register():
#     username = request.form.get("username")
#     email = request.form.get("email")
#     password = request.form.get("password")
#     avatar_file = request.files.get("avatar")  # Archivo de imagen

#     if not username or not email or not password:
#         return jsonify({"error": "Faltan datos"}), 400

   
#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')


   
#     avatar_filename = None
#     if avatar_file:
#         filename = secure_filename(avatar_file.filename)
#         avatar_filename = f"{username}_{filename}"
#         avatar_path = os.path.join(app.config["UPLOAD_FOLDER"], avatar_filename)
#         avatar_file.save(avatar_path)

   
#     new_user = User(username=username, email=email, password=hashed_password, avatar=avatar_filename)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"message": "Registro recibido", "user": new_user.to_dict()}), 201



# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({"error": "Faltan datos"}), 400

#     user = User.query.filter_by(email=email).first()
#     if user and bcrypt.check_password_hash(user.password, password):
#         return jsonify({'message': 'Login exitoso', 'user': user.to_dict()})
#     else:
#         return jsonify({'message': 'Email o contraseña incorrectos'}), 401
 


# @app.route('/uploads/<filename>')
# def uploaded_file(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)



import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from werkzeug.utils import secure_filename
from models import db, User

# Definir ruta absoluta para carpeta de uploads
basedir = os.path.abspath(os.path.dirname(__file__))
UPLOAD_FOLDER = os.path.join(basedir, "uploads")

# Crear la carpeta uploads si no existe
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)

# ===========================
# CONFIGURACIÓN BASE DE DATOS
# ===========================

# Leer URL de base de datos desde variable de entorno
# Si no existe, usar SQLite local para desarrollo
DATABASE_URL = os.environ.get("DATABASE_URL")
if DATABASE_URL:
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db.init_app(app)

# Crear la base de datos al iniciar (solo para SQLite)
with app.app_context():
    db.create_all()

# ===========================
# RUTAS
# ===========================

# Registro de usuario con avatar
@app.route("/register", methods=["POST"])
def register():
    username = request.form.get("username")
    email = request.form.get("email")
    password = request.form.get("password")
    avatar_file = request.files.get("avatar")

    if not username or not email or not password:
        return jsonify({"error": "Faltan datos"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    avatar_filename = None
    if avatar_file:
        filename = secure_filename(avatar_file.filename)
        avatar_filename = f"{username}_{filename}"
        avatar_path = os.path.join(app.config["UPLOAD_FOLDER"], avatar_filename)
        avatar_file.save(avatar_path)

    new_user = User(username=username, email=email, password=hashed_password, avatar=avatar_filename)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registro recibido", "user": new_user.to_dict()}), 201


# Login
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


# Servir imágenes de perfil
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


# ===========================
# EJECUCIÓN
# ===========================

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

