from pymongo import MongoClient
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


client = MongoClient("mongodb://localhost:27017")
db = client.ey

dataset = pd.read_csv("Backend/Final_dataset.csv")

dataset = dataset.fillna(0)

states = dataset["State/UT"].unique()

col = [' Geographical Area', 'Total Forest Cover Area',
       'Very Dense', 'Moderately Dense', 'Open Forest', ' Scrub Land',
       'Mangrove']

main_data = []
for i in states:
  final = {}
  ds = dataset[dataset["State/UT"] == i].sort_values('Year').values
  year = {}
  for j in ds:
    values = {
        'Geographical Area' : float(j[2]),
        'Total Forest Cover Area' : float(j[3]),
        'Very Dense Forest Area' : float(j[4]),
        'Moderately Dense Forest Area' : float(j[5]),
        'Open Forest Area' : float(j[6]),
        'Scrub Land Area' : float(j[7]),
        'Mangrove Forest Area' : float(j[8])
    }
    year[f'{j[1]}'] = values
    final["Region"] = i
    final["Data"] = year
  main_data.append(final) 
dashboard = db.dashboard
dashboard.insert_many(main_data)