from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client.ey
dashboard = db.dashboard
dataset = pd.read_csv("Final_dataset.csv")
state_list = dataset["State/UT"].values
states = [i.lower() for i in state_list]
app = Flask(__name__)

@app.route("/", methods=["GET"])
def get_home_data():
    data = list(dashboard.find({"Region" : "India"}, {'_id' : 0}))[0]
    return jsonify(data)

@app.route("/<variable>", methods=["GET"])
def get_state_data(variable):
    print(variable)
    if(variable.lower() in states):
        for i in range(len(states)):
            if(variable.lower() == states[i]):
                position = i


        data = list(dashboard.find({"Region" : state_list[position]}, {'_id' : 0}))[0]
        return jsonify(data)

    else:
        return "Invalid route"

if __name__ == "__main__":
    app.run(debug=True)