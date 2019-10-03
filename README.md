# Story Gear
An eCommerce site that sells camera gear. Welcome to Story Gear! Tell us a story. The Story Gear official website is efficient in displaying the products that are offered for the best price.

## Getting Started
These instructions can be used to run the project locally for development and testing. 
1. Open your terminal and go to the root of the project
2. Run 'npm install' - This downloads the dependencies that are needed to properly run the website
2. Run 'npm start' - This starts the Express server, and the React app at the same time

### Prerequisies
No additional instillation should be required. 
However, a possible list of prerequisites can be found below. Simply ‘cd’ into the respective directories and run ‘npm install --save (prerequisite)’ if the prerequisite needs to be downloaded again.

root: story-gear-ecommerce/package.json
- express
- mysql
- concurrently 
- if-env
- helmet 
- morgan
- path

client directory: story-gear-ecommerce/client/package.json
- react
- react-dom
- react-hook-form
- react-router-dom
- react-scripts
- react-slick
- slick-carousel

## Running the tests
Go to the root of the project, and run ‘npm test’ in your terminal. This will run the available tests for this project. The tests can be found in the 'test' directory (story-gear-ecommerce/test/test-pages.js).

## Database
MySql is used as a database server in order to display the products available on the Story Gear website. The code used to create the tables and insert the values can be found under the 'dB schema' directory. Copy the information and paste it into MySql Workbench. 
More information, including how to download Workbench can be found here: https://www.mysql.com/products/workbench/
