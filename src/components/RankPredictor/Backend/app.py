
import time
from flask import Flask
import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.ensemble import RandomForestRegressor
from flask_cors import cross_origin

app = Flask(__name__)


def RankPredictor(marks):
    df = pd.read_excel('rp1.xlsx')
    df1_train = df[['Percentage', 'marks', 'DF_P', 'DF_C', 'DF_ M', 'crl']
                ][df['year'] != 2013]  # Training Data which excludes 2013 year data
    df1_test = df[['Percentage', 'marks', 'DF_P', 'DF_C', 'DF_ M', 'crl']
                ][df['year'] == 2013]  # Testing data which incldes data of 2013
    X_train = df1_train[['Percentage', 'marks', 'DF_P', 'DF_C', 'DF_ M']]
    y_train = df1_train[['crl']]
    X_test = df1_test[['Percentage', 'marks', 'DF_P', 'DF_C', 'DF_ M']]
    y_test = df1_test[['crl']]
    rf = RandomForestRegressor(random_state=42, n_estimators=300)
    model = rf.fit(X_train, y_train.values.ravel())
    y_pred = model.predict(X_test).astype('int')
    percent = (marks/396)*100
    res = rf.predict([[percent, marks, 1.7191, 2.2591, 1.8491]])
    value = ','.join(str(v) for v in res)
    return value


@app.route("/rank/<int:marks>")
@cross_origin('localhost')
def home(marks):
    res = RankPredictor(marks)
    return res


if __name__ == "__main__":
    app.run(debug=True)
