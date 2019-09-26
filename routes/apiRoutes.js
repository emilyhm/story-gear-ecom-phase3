//////////////////////////////////////////////UNCOMMENT THIS WHEN YOU FIGURE OUT HOW TO FIX IT //////////////////////////////////////////////////////////////////////////////

const router = require("express").Router();
//.Router helps to breakdown the API routes
const mysql = require('mysql');

//DB Connection
const connection = mysql.createConnection({
    host: "localhost",
    //db port
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecommerce"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function(err, data){
      console.table(data)  
    })  
  });



////////////////////////////////////////////////////


router.get("/products", (req, res) => {
    connection.query("SELECT product_name, product_image, product_alt_desc, category, item_description, prices.price FROM products INNER JOIN prices ON products.product_id = prices.product_id", function(err, data){
        res.json(data)
    });
});



router.get("/contacts", (req, res) => {
    connection.query("SELECT first_name, last_name, email, contact_comment FROM contacts", function(err, data){
        res.json(data)
    });
});

// products/type/camera/price/high
router.get("/products/type/:type/price/:price", (req, res) => {
    var query = "select * from products where 1";

    //THIS IS SLIGHTLY NOT SECURE- sanatize later
    if (type !== "all") 
    {
        query = query + `AND category = ${type}`;
    };

    if (type !== "all")
    {
        query = query + `AND monetary_value = ${price}`
    };

    connection.query(query, function(err, data){
        res.json(data)
    });
});




module.exports = router;