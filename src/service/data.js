let catalog = [
    {
        "title":"BMW",
        "category":"Luxurycars",
        "price": 15, 
        "image":"picture",
        "_id":"1" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"mecedes",
        "category":"cars",
        "price": 15, 
        "image":"picture",
        "_id":"2" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"cheverolet",
        "category":"trucks",
        "price": 15, 
        "image":"picture",
        "_id":"3" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"Buick",
        "category":"SUVs",
        "price": 15, 
        "image":"picture",
        "_id":"4" //the id should be unique, (it cannot be repeated)
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }
}

