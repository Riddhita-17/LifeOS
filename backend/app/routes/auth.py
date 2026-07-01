from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

from app import db
from app.models.user import User

auth = Blueprint("auth", __name__)

bcrypt = Bcrypt()

# ---------------- REGISTER ---------------- #

@auth.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "message": "All fields are required."
        }), 400

    existing = User.query.filter_by(email=email).first()

    if existing:
        return jsonify({
            "message": "Email already exists."
        }), 409

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user = User(
        name=name,
        email=email,
        password=hashed_password
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "Registration Successful"
    }), 201


# ---------------- LOGIN ---------------- #

@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "message": "Email and Password are required."
        }), 400

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({
            "message": "Invalid Email"
        }), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({
            "message": "Invalid Password"
        }), 401

    # IMPORTANT: Identity must be a string
    access_token = create_access_token(
        identity=str(user.id)
    )

    return jsonify({

        "message": "Login Successful",

        "token": access_token,

        "name": user.name,

        "email": user.email

    }), 200