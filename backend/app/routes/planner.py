from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from app import db
from app.models.task import Task

planner = Blueprint("planner", __name__)


# ----------------------------
# Get All Tasks
# ----------------------------
@planner.route("/tasks", methods=["GET"])
@jwt_required()
def get_tasks():

    user_id = int(get_jwt_identity())

    tasks = Task.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": task.id,
            "title": task.title,
            "completed": task.completed,
        }
        for task in tasks
    ])


# ----------------------------
# Add Task
# ----------------------------
@planner.route("/tasks", methods=["POST"])
@jwt_required()
def add_task():

    data = request.get_json()

    user_id = int(get_jwt_identity())

    task = Task(
        title=data.get("title"),
        completed=False,
        user_id=user_id
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({
        "message": "Task Added Successfully"
    }), 201


# ----------------------------
# Toggle Complete
# ----------------------------
@planner.route("/tasks/<int:id>", methods=["PUT"])
@jwt_required()
def update_task(id):

    user_id = int(get_jwt_identity())

    task = Task.query.filter_by(
        id=id,
        user_id=user_id
    ).first_or_404()

    task.completed = not task.completed

    db.session.commit()

    return jsonify({
        "message": "Task Updated Successfully"
    })


# ----------------------------
# Delete Task
# ----------------------------
@planner.route("/tasks/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_task(id):

    user_id = int(get_jwt_identity())

    task = Task.query.filter_by(
        id=id,
        user_id=user_id
    ).first_or_404()

    db.session.delete(task)
    db.session.commit()

    return jsonify({
        "message": "Task Deleted Successfully"
    })