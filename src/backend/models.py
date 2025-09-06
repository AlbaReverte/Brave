# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(120), nullable=False)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "username": self.username,
#             "email": self.email
#         }



from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    avatar = db.Column(db.String(200), nullable=True)  # Nuevo campo para la foto

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # Si tiene avatar guardado, devolvemos la URL completa
            "avatar": f"http://localhost:5000/uploads/{self.avatar}" if self.avatar else None
        }

