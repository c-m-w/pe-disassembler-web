### disassemble.py

import subprocess

def disassemble(path):

    proc = subprocess.Popen(["./backend/serialize", path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, error = proc.communicate()
    return out.decode("ascii")
