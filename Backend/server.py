from flask import Flask, json, request, jsonify, redirect
import numpy as np
import pandas as pd
from flask_cors import CORS
from pymongo import MongoClient
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.cluster import KMeans
import requests
from requests.structures import CaseInsensitiveDict
from scipy.special import softmax
import tensorflow as tf
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import transformers
import string
import re
import ast
token = "AAAAAAAAAAAAAAAAAAAAAKi7WwEAAAAAJluNwwCTUYfqBY2t68om7gTYFeE%3D62xRr0Ay47fjpAxtEyDdzQIDomu1qzz4vwecSXl8g6EReT0e3R"


# client = MongoClient("mongodb://localhost:27017")
client = MongoClient("mongodb+srv://aavaig:aavaig2001@cluster0.s4h1n.mongodb.net/eytechathon2?retryWrites=true&w=majority")
db = client.ey
dashboard = db.dashboard
dataset = pd.read_csv("Final__dataset.csv")
# dataset = pd.read_csv(os.path.join(os.getcwd(), 'Final_dataset.csv'))
state_list = dataset["State/UT"].values
states = [i.lower() for i in state_list]
app = Flask(__name__)
tokenizer = AutoTokenizer.from_pretrained("cardiffnlp/twitter-xlm-roberta-base-sentiment")
model = AutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-xlm-roberta-base-sentiment")

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
    # print(app.env)
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
    with open("tot_forest_area.pkl", 'rb') as f:
        model = pickle.load(f)
        values = [np.array([area, year])]
        preds = model.predict(values)
        return jsonify({"Result"  :  preds[0][0]} )

@app.route("/state", methods=["POST"])
def getStateData():
    year = request.form.get("year")
    data = list(dashboard.find())
    final = {}
    for i in data:
        if i["Region"] == "Telangana":
            continue
        else:
            ds = i["Data"][str(year)]
            final[i["Region"]] = ds 
    return jsonify(final)


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
    final = {x[0] : str(x[1]) for x in zip(ds["State/UT"].values, res)}
    return jsonify(final)

@app.route("/getTweets", methods=["GET"])
def getTweetData():
    url = "https://api.twitter.com/2/tweets/search/recent?query=forest"
    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = f"Bearer {token}"
    resp = requests.get(url, headers=headers)
    res = ast.literal_eval(resp.content.decode("utf-8"))
    return jsonify(res)


def strip_links(text):
    link_regex    = re.compile('((https?):((//)|(\\\\))+([\w\d:#@%/;$()~_?\+-=\\\.&](#!)?)*)', re.DOTALL)
    links         = re.findall(link_regex, text)
    for link in links:
        text = text.replace(link[0], ', ')    
    return text

def strip_all_entities(text):
    entity_prefixes = ['@','#']
    for separator in  string.punctuation:
        if separator not in entity_prefixes :
            text = text.replace(separator,' ')
    words = []
    for word in text.split():
        word = word.strip()
        if word:
            if word[0] not in entity_prefixes:
                words.append(word)
    return ' '.join(words)
def clean(x):
  if(x.find("RT") == 0 and x.find(":") != -1):
      ind = x.find(":")
      final = x[ind + 1:]
      return strip_all_entities(strip_links(final))
  else:
      return strip_all_entities(strip_links(x))

@app.route("/rating", methods=["POST"])
def getRating():
    tag = request.form.get('tag')
    url = f"https://api.twitter.com/2/tweets/search/recent?query={tag}"
    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = f"Bearer {token}"
    resp = requests.get(url, headers=headers)
    a = ast.literal_eval(resp.content.decode("utf-8"))
    a = a["data"]
    tweets = []
    for i in a:
        tweets.append(i["text"])
    for i in range(len(tweets)):
        tweets[i] = clean(tweets[i])
    f = []
    for i in tweets:
        if(i == " " or i == ""):
            continue
        f.append(i)
    df = pd.DataFrame(f, columns=["text"])
    res = {}
    for i in df.text.values:
        encoded_input = tokenizer(i, return_tensors='pt')
        output = model(**encoded_input)
        scores = output[0][0].detach().numpy()
        scores = softmax(scores)
        scores = np.argmax(scores, axis = -1)
        if(scores == 0):
            res[str(i)] = "Positive"
        elif scores == 1:
            res[str(i)] = "Positive"
        else:
            res[str(i)] = "Negative"
    return jsonify(res)
    


if __name__ == "__main__":
    app.run(debug=True)