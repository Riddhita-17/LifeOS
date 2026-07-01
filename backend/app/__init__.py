from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
jwt = JWTManager()
bcrypt = Bcrypt()


def create_app():

    app = Flask(__name__)

    app.config.from_object("config.Config")

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

    CORS(app)

    # Register Blueprints
    from app.routes.auth import auth
    from app.routes.planner import planner

    app.register_blueprint(auth, url_prefix="/api")
    app.register_blueprint(planner, url_prefix="/api")

    with app.app_context():

        # Import Models
        from app.models.user import User
        from app.models.task import Task

        # Create Tables
        db.create_all()

    return app