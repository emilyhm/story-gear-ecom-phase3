require('dotenv').config();
const express = require("express");
const mysql = require('mysql');
const path = require("path")
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");

////////////////////////////////////////////////UNCOMMENT THIS ONCE YOU FIGURE OUT HOW TO MAKE IT WORK: .get("http://link_goes_here"
////////////////////////////////////////////////
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//only needed for a json file
// app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



////////////////////APIs//////////////////////////////



//THIS BRINGS THE DATA FROM THE DATABASE

//use apiRoutes
app.use("/api", apiRoutes)

//THIS SENDS EVERY REQUEST TO THE REACT APP, (BUT MAKE SURE TO DEFINE ANY API ROUTES BEFORE THIS RUNS) 



//THIS BRINGS IN THE STYLES 

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
    console.log(`API server is now running on port ${PORT}`)
})