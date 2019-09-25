require('dotenv').config();
const express = require("express");
const mysql = require('mysql');
// const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");

////////////////////////////////////////////////UNCOMMENT THIS ONCE YOU FIGURE OUT HOW TO MAKE IT WORK: .get("http://link_goes_here"
////////////////////////////////////////////////
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//use apiRoutes
app.use("/api", apiRoutes);
//THIS SENDS EVERY REQUEST TO THE REACT APP, (BUT MAKE SURE TO DEFINE ANY API ROUTES BEFORE THIS RUNS <-- what does this means i have no clue) 


//DB Connection
const connection = mysql.createConnection({
    host: "localhost",
    //db port
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecommerce"
    //look up env and how to use it here ???
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function(err, data){
      console.table(data)  
    })  
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

////////////////////////////////////////////////////////////////////////////////////////////////

let camera1 = {
    product_id: 1,
    price: 100.00,
    category: 'cameras',
    item_description: "hey this is a cool camera!",
    quantity: 3
};

//home page 
app.get("/", function(req, res){
    res.send(camera1)
});

//fetch all products 
app.get("/api/products", function(req, res){
    connection.query("SELECT * FROM products", function(err, data){
        res.json(data)
    })
});

app.get("/api/contacts", function(req, res){
    //do stuff
    // res.send()
});

app.get("/api/productfilter/:query", function(req, res){
    //do stuff
    // res.send()
});



app.listen(PORT, function() {
    console.log(`API server is now running on port ${PORT}`)
})