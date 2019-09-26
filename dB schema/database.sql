DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS price;
DROP TABLE IF EXISTS contact;

CREATE DATABASE ecommerce;
USE ecommerce;


-- PRODUCTS
 CREATE TABLE products
(product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 product_name VARCHAR (100) NOT NULL,
 product_image VARCHAR (1000),
 product_alt_desc VARCHAR (1000), 
 category VARCHAR(50) NOT NULL,
 item_description VARCHAR(1000),
 quantity INT NOT NULL);

 INSERT INTO products (product_name, product_image, product_alt_desc, category, item_description, quantity)
 VALUES ('DSMC2 BRAIN RED DRAGON-X 5K S35', 'https://www.red.com/SSP%20Applications/Red@SuiteCentric/SCA%20Kilimanjaro/img/products/710-0317_0.png?resizeid=5&resizeh=1200&resizew=1200', 'black red camera', 'cameras', 
 'DRAGON-X features the industry workhorse and award-winning DRAGON sensor, now with IPP2, delivering 5K cinematic imagery in a Super 35 format.', 1);


--PRICES
CREATE TABLE prices (
 product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 price DECIMAL(10,2) NOT NULL,
 monetary_value VARCHAR (10) NOT NULL
 );
 
 INSERT INTO prices (price, monetary_value)
 VALUES (14950.00, 'high');


-- CONTACTS
CREATE TABLE contacts
(contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 contact_comment VARCHAR(10000));

 INSERT INTO contacts (first_name, last_name, email, contact_comment)
 VALUES ('Emily', 'Hernandez-Mendez', 'ihopethisworks@gmail.com', 'i really hope this works');