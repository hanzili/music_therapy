from flask import render_template, Flask

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")  # 加入变量传递


if __name__ == "__main__":
    app.run(port=2020, host="127.0.0.1", debug=True)
