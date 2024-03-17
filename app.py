from flask import Flask, render_template

app = Flask(__name__)


@app.route("/index")
@app.route("/")
def index():
    return render_template('base.html')


@app.route("/file_page")
def file_page():
    return render_template("file_page.html")


@app.route("/url_page")
def url_page():
    return render_template("url_page.html")


if __name__ == '__main__':
    app.run(debug=True)
