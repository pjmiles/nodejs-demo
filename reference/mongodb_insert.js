var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ponmilejames:Bishop01@cluster0.xtors.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "PJMILES Global", address: "Sterling 45" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })
})