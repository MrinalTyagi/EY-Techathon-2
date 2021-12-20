from flask import Flask, json, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS
from pymongo import MongoClient
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.cluster import KMeans
import requests
from requests.structures import CaseInsensitiveDict
token = "AAAAAAAAAAAAAAAAAAAAAKi7WwEAAAAAJluNwwCTUYfqBY2t68om7gTYFeE%3D62xRr0Ay47fjpAxtEyDdzQIDomu1qzz4vwecSXl8g6EReT0e3R"


client = MongoClient("mongodb://localhost:27017")
db = client.ey
dashboard = db.dashboard
dataset = pd.read_csv("Backend/Final_dataset.csv")
state_list = dataset["State/UT"].values
states = [i.lower() for i in state_list]
app = Flask(__name__)

clusters = {
    1987: 6,
    1989: 6,
    1991: 6,
    1993: 6,
    1995: 6,
    1997: 6,
    1999: 6,
    2001: 8,
    2003: 5,
    2005: 6,
    2007: 6,
    2009: 7,
    2011: 4,
    2013: 6,
    2015: 4,
    2017: 5,
    2019: 5
}

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


@app.route("/cluster", methods=["POST"])
def cluster():
    year = request.form.get('year')
    ds = dataset[dataset["Year"] == int(year)]
    kmeans = KMeans(n_clusters=clusters[int(year)], init="k-means++", random_state=42)
    kmeans.fit(ds.iloc[:, 1:].values)
    res = kmeans.predict(ds.iloc[:, 1:].values)
    final = {x[0] : x[1] for x in zip(ds["State"].values, res)}
    return jsonify(final)

@app.route("/getTweets", methods=["GET"])
def getTweetData():
    url = "https://api.twitter.com/2/tweets/search/recent?query=forest"
    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = f"Bearer {token}"
    resp = requests.get(url, headers=headers)
    return jsonify(resp.content)


if __name__ == "__main__":
    app.run(debug=True)