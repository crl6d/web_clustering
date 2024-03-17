from sklearn.preprocessing import StandardScaler


def preprocess_dataset(dataset):
    dataset = dataset.drop(columns=['unnecessary_column1', 'unnecessary_column2'])

    dataset = dataset.fillna(0)

    scaler = StandardScaler()
    preprocessed_dataset = scaler.fit_transform(dataset)

    return preprocessed_dataset
