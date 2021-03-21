let MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function storedata(panDetails){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        dbo.collection("panDetails").insertOne(details, 
            function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
}

module.exports = {storedata}; 