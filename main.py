from flask import Flask, render_template, request, redirect

app = Flask(__name__, static_url_path="/static")

@app.route('/')
def home():
    return render_template("scrollBox.html")

app.run(debug=True)