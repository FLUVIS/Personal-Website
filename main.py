from flask import Flask, render_template, request, redirect

app = Flask(__name__, static_url_path="/static")

@app.route('/')
def home():
    images = ['81','Beautiful Mistakes','Claw','Containment','Convergence','Crossroads','Deception','Discovery',
              'Elegant Nine','Eleven','Evergreen','Eyeglass','Flower Garden','Harmonic 5','Harmonic 6','Looper',
              'Lotus','Nine','Portal','Rings','Seven','Spider','Starfish','Star Struck','Subharmonic 7','Sun Burst',
              'The Mark','The Mask','Transcendence','Triangulation']
    return render_template("scrollBox.html", art=art)

app.run(debug=True)