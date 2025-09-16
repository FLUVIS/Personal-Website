from flask import Flask, render_template, request, redirect

app = Flask(__name__, static_url_path="/static")

@app.route('/')
def home():
    # art format [name, minimum price, maximum price, number of pictures]
    art = [['81', 50, 100, 4],['Beautiful Mistakes', 50, 100, 4],['Claw', 50, 100, 4],['Containment', 50, 100, 4],
           ['Convergence', 50, 100, 4],['Crossroads', 50, 100, 4],['Deception', 50, 100, 4],['Discovery', 50, 100, 4],
           ['Elegant Nine', 50, 100, 4],['Eleven', 50, 100, 4],['Evergreen', 50, 100, 4],['Eyeglass', 50, 100, 4],
           ['Flower Garden', 50, 100, 4],['Harmonic 5', 50, 100, 4],['Harmonic 6', 50, 100, 4],['Looper', 50, 100, 4],
           ['Lotus', 50, 100, 4],['Nine', 50, 100, 4],['Portal', 50, 100, 4],['Rings', 50, 100, 4],['Seven', 50, 100, 4],
           ['Spider', 50, 100, 4],['Starfish', 50, 100, 4],['Star Struck', 50, 100, 4],['Subharmonic 7', 50, 100, 4],
           ['Sun Burst', 50, 100, 4],['The Mark', 50, 100, 4],['The Mask', 50, 100, 4],['Transcendence', 50, 100, 4],
           ['Triangulation', 50, 100, 4]]

    return render_template("scrollBox.html", art=art)

app.run(debug=True)