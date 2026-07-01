from app import create_app

app = create_app()

@app.route("/")
def home():
    return {
        "status": "success",
        "message": "LifeOS Backend Running 🚀"
    }

if __name__ == "__main__":
    app.run(debug=True)
    