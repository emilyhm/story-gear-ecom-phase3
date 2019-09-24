DROP DATABASE IF EXISTS products;
DROP DATABASE IF EXISTS price;
DROP DATABASE IF EXISTS contact;

CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE products
(product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 price DECIMAL(6,2) NOT NULL FOREIGN KEY,
 category VARCHAR(50) NOT NULL,
 item_description VARCHAR(10000),
 quantity INT NOT NULL);
--  INSERT INTO products (product_id, price, category, item_description, quantity)
--  VALUES (INSERT VALUES HERE!!!)



CREATE TABLE price
(price DECIMAL(6,2) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 product_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY);
--  INSERT INTO products (price, product_id)
--  VALUES (INSERT VALUES HERE!!!)



CREATE TABLE contacts
(contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 comment VARCHAR(10000));
--  INSERT INTO products (contact_id, first_name, last_name, email, comment)
--  VALUES (INSERT VALUES HERE!!!)