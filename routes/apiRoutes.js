//////////////////////////////////////////////UNCOMMENT THIS WHEN YOU FIGURE OUT HOW TO FIX IT //////////////////////////////////////////////////////////////////////////////



const router = require("express").Router();
const mysql = require('mysql');
//.Router helps to breakdown the API routes



// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password"
//     //look up env and how to use it here ???
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });




router.get("/products", (req, res) => {
    //use sql instead of axios 
    mysql
        .get(con, {

        //look query up !!!
        params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;