# server.py

import subprocess
import os
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def client(path):

    proc = subprocess.Popen(["./backend/test"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    out, error = proc.communicate()

    return "output: " + out.decode("ascii")

if __name__ == "__main__":

    server_port = int(os.environ.get("PORT", 5000)) 
    app.run(debug=False, host="0.0.0.0", port=server_port)
