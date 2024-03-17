from data_preprocessing import *
from sklearn.cluster import DBSCAN

dataset = preprocessed_dataset

def dbscan_clustering(dataset, eps=0.5, min_samples=5):

    dbscan = DBSCAN(eps=eps, min_samples=min_samples)
    clusters = dbscan.fit_predict(dataset)
    return clusters
