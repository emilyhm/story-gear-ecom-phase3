require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
// security
const fs = require("fs");
// reading file systems
const morgan = require("morgan");
// api request logging
const accessLogStream = fs.createWriteStream("morgan.log", { flags: "a" });
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");



//middleware
app.use(morgan("dev", { stream: accessLogStream }));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
//used to specify the language 

//Serve up static assets (usually on heroku)
// console.log('process.env.NODE_ENV - ', process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//////////////////////////////////////
//////////////  APIs  ////////////////
//////////////////////////////////////

//This brings data from the database
app.use("/api", apiRoutes)

// This brings in the React app 
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//shows the port that the express server is running on
app.listen(PORT, function() {
    console.log(`API server is now running on port ${PORT}`)
})