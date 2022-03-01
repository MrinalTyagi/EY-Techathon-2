from pymongo import MongoClient
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sys

# client = MongoClient("mongodb://localhost:27017")
client = MongoClient("mongodb+srv://aavaig:aavaig2001@cluster0.s4h1n.mongodb.net/eytechathon2?retryWrites=true&w=majority")
db = client.ey

dataset = pd.read_csv("Final__dataset.csv")

dataset = dataset.fillna(0)

states = dataset["State/UT"].unique()

col = ['Geographical Area', 'Total Forest Cover Area',
       'Very Dense', 'Moderately Dense', 'Open Forest', ' Scrub Land',
       'Mangrove', 'SO2', 'NO2', 'RSPM', 'SPM', 'PM25','	Annual Rainfall']

main_data = []
for i in states:
  final = {}
  ds = dataset[dataset["State/UT"] == i].sort_values('Year').values
  ds_df = dataset[dataset["State/UT"] == i].sort_values('Year')
  year = {}
  for j in ds:
    normal_rainfall = (float(j[3]) * float(j[14])) / max(dataset['Annual Rainfall'])
    normal_no2 = (float(j[3]) * float(j[10])) / max(dataset['NO2']) 
    normal_pm25 = (float(j[3]) * float(j[13])) / max(dataset['PM25']) 
    normal_rspm = (float(j[3]) * float(j[11])) / max(dataset['RSPM']) 
    normal_so2 = (float(j[3]) * float(j[9])) / max(dataset['SO2'])
    normal_spm = (float(j[3]) * float(j[12])) / max(dataset['SPM']) 
    values = {
        'Geographical Area' : float(j[2]),
        'Total Forest Cover Area' : float(j[3]),
        'Very Dense Forest Area' : float(j[4]),
        'Moderately Dense Forest Area' : float(j[5]),
        'Open Forest Area' : float(j[6]),
        'Scrub Land Area' : float(j[7]),
        'Mangrove Forest Area' : float(j[8]),
        'SO2' : float(j[9]),
        'NO2' : float(j[10]),
        'RSPM' : float(j[11]),
        'SPM' : float(j[12]),
        'PM25' : float(j[13]),
        'Annual Rainfall' : float(j[14]),
        'N_Annual_Rainfall' : normal_rainfall,
        'N_NO2' :  normal_no2,
        'N_PM25' : normal_pm25,
        'N_RSPM' :  normal_rspm,
        'N_SO2' :  normal_so2,
        'N_SPM' :  normal_spm
    }
    year[f'{j[1]}'] = values
    final['Region'] = i
    final['Data'] = year
  main_data.append(final)
dashboard = db.dashboard
dashboard.insert_many(main_data)