require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path")
const helmet = require("helmet")
const fs = require("fs")
const morgan = require("morgan")
const accessLogStream = fs.createWriteStream("morgan.log", { flags: "a" });
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");



app.use(morgan("dev", { stream: accessLogStream }));
app.use(helmet());
//middleware
app.use(express.urlencoded({ extended: true }));
//only needed for a json file
// app.use(express.json());

//Serve up static assets (usually on heroku)
// console.log('process.env.NODE_ENV - ', process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//////////////////////////////////////
//////////////  APIs  ////////////////
//////////////////////////////////////

//THIS BRINGS THE DATA FROM THE DATABASE
app.use("/api", apiRoutes)

// This brings in the React app 
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`API server is now running on port ${PORT}`)
})