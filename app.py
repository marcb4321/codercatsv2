from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def say_hello():
  return render_template("index.html")

from datetime import datetime
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}

app.run(debug=True)
