### server.py

import subprocess
import os
import json
from datetime import datetime

from flask import Flask, send_from_directory, request
from flask_cors import CORS

from werkzeug.utils import secure_filename

from tables import *
from allowed_file import allowed_file
from make_response import make_response
from disassemble import disassemble

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

	print("send index")

	return send_from_directory("public/", "index.html")

##############################
#
# static js, css
#
##############################

@app.route("/static/<string:file>")
def send_static(file):

	print("send static", file)

	return send_from_directory("public/", file)

##############################
#
# assets
#
##############################

@app.route("/assets/icons/<string:file>")
def send_asset(file):

	return send_from_directory("public/assets/icons/", file)

##############################
#
# api
#
##############################

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

	file.save(path)
	
	data = json.loads(disassemble(path))
	date = datetime.today().strftime("%B %d %Y")
	size = int(os.path.getsize(path) / 1000)
	
	if os.path.exists(path):
		os.remove(path)

	if not data["success"]:

		return make_response(False, "Invalid PE")
 
	db.session.add(PE(fname=fname, date=date, size=size, data=json.dumps(data["data"])))
	db.session.commit()
	pe = db.session.query(PE).order_by(PE.id.desc()).first()

	return make_response(True, data=pe.id)

@app.route("/api/data", methods=["GET"])
def get():

	query = db.session.execute(db.select(PE)).scalars()

	data = []

	for pe in query:

		data.append({"id": pe.id, "fname": pe.fname, "date": pe.date, "size": pe.size, "data": pe.data})

	print(data)
	return make_response(True, data=data)

if __name__ == "__main__":

	server_port = int(os.environ.get("PORT", 5000)) 
	app.run(debug=False, host="0.0.0.0", port=server_port)
