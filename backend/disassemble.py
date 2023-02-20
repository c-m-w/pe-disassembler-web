### disassemble.py

import subprocess

def disassemble(path):

    proc = subprocess.Popen(["./backend/test-print"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    out, error = proc.communicate()

    return out.decode("ascii")
