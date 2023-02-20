### tables.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PE(db.Model):

    id      = db.Column(db.Integer, primary_key=True)
    fname   = db.Column(db.String)
    date    = db.Column(db.String)
    size    = db.Column(db.Integer)
    data    = db.Column(db.String)
