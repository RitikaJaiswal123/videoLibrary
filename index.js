var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));

var connectionString = "mongodb://localhost:27017";

app.get("/get-admin",(req, res)=>{
    mongoClient.connect(connectionString).then(connectionObject=>{
        var database = connectionObject.db("videobd");
        database.collection("tbladmin").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end()
        });
    });
});

app.get("/get-categories",(req, res)=>{
    mongoClient.connect(connectionString).then(connectionObject=>{
        var database = connectionObject.db("videobd");
        database.collection("tblcategories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end()
        });
    });
});

app.listen(5050);
console.log(`server started : http://127.0.0.1:5050`);