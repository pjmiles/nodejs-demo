
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ponmilejames:Bishop01@cluster0.xtors.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb")
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    }) 
});


// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://ponmilejames:Bishop01@cluster0.xtors.mongodb.net/?retryWrites=true&w=majority")
// .then(() => {
//     console.log("Connected to mongoDB")
// })
// .catch((err) =>{
//     console.log(err)
// });