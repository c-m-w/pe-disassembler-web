### allowed_file.py

ALLOWED_EXTENSIONS = {"dll", "exe"}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
