### server.py

import subprocess
import os

from flask import Flask, send_from_directory, request
from flask_cors import CORS

from werkzeug.utils import secure_filename

from tables import *
from allowed_file import allowed_file
from make_response import make_response

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "backend/tmp"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
CORS(app)

db.init_app(app)

with app.app_context():

    db.create_all()

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def client(path):

    proc = subprocess.Popen(["./backend/test-print"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    out, error = proc.communicate()

    return "output: " + out.decode("ascii")

@app.route("/api/upload", methods=["POST"])
def upload():

    print(request.files)

    if "fileKey" not in request.files:
        # todo handle error
        return make_response(False, "No file")
    
    file = request.files["fileKey"]

    if file.filename == "" or not allowed_file(file.filename):

        return make_response(False, "Bad file")
    
    fname = secure_filename(file.filename)
    path = os.path.join(app.config['UPLOAD_FOLDER'], fname)
    print(file)

    file.save(path)

    return make_response(True)

if __name__ == "__main__":

    server_port = int(os.environ.get("PORT", 5000)) 
    app.run(debug=False, host="0.0.0.0", port=server_port)
