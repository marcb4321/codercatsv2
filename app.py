from flask import Flask, render_template, redirect, url_for


app = Flask(__name__)

@app.route("/")
def say_hello():
  return render_template("index.html")


@app.route("/loginregister")
def loginregister():
    return render_template("loginregister.html")



@app.route('/whatiscodercats')
def whatiscodercats():
    return redirect(url_for('say_hello',_anchor='whatiscodercats'))

@app.route('/howitworks')
def howitworks():
    return redirect(url_for('say_hello',_anchor='howitworks'))

@app.route('/tryitnow')
def tryitnow():
    return redirect(url_for('say_hello',_anchor='tryitnow'))

@app.route('/contact')
def contact():
    return redirect(url_for('say_hello',_anchor='contact'))

from datetime import datetime
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}

app.run(debug=True)
