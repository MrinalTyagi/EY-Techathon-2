from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS
from pymongo import MongoClient
import pickle
from sklearn.linear_model import LinearRegression

client = MongoClient("mongodb://localhost:27017")
db = client.ey
dashboard = db.dashboard
dataset = pd.read_csv("Backend/Final_dataset.csv")
state_list = dataset["State/UT"].values
states = [i.lower() for i in state_list]
app = Flask(__name__)

CORS(app)

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


@app.route("/predict/TFA", methods=["POST"])
def predict_total_forest():
    year = request.form.get('year')
    state = request.form.get('area')
    # year = 88752.0
    # state = "west bengal"
    if(state.lower() in states):
        for i in range(len(states)):
            if(state.lower() == states[i]):
                position = i
        data = list(dashboard.find({"Region" : state_list[position]}, {'_id' : 0}))[0]
        area = list(data["Data"].items())[0][1]['Geographical Area']
    with open("Backend/tot_forest_area.pkl", 'rb') as f:
        model = pickle.load(f)
        values = [np.array([area, year])]
        preds = model.predict(values)
        return jsonify({"Result"  :  preds[0][0]} )


@app.route("/all", methods=["GET"])
def getAllData():
    data = {}
    for i in state_list:
        data_fetch = list(dashboard.find({"Region" : i}, {'_id' : 0}))[0]
        data[i] = data_fetch
    return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)