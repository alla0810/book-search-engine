# Book Search Engine  ![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)

## Description

This program provides a reader with a functionality to search for new books to read so that the reader can keep a list of books to purchase.


## Features

GIVEN a book search engine

* WHEN you load the search engine, THEN you are presented with a menu with the options Search for Books and Login/Signup and an input field to search for Books and Login/Signup and an input field to search for books and a submit button

* WHEN you click on the Search for Books menu option, THEN you are presented with an input field to search for books and a submit button

* WHEN you are not logged in and enter a search term in the input field and click the submit button, THEN you are presented with several search results, each featuring a book's title, author, description, image, and a link to that book on the Google Books site

* WHEN you click on the Login/Signup menu option, THEN a modal appears on the screen with a toggle between the option to log in or sign up

* WHEN the toggle is set to Signup, THEN you are presented with three inputs for a username, an email address, and a pasword, and a signup button

* WHEN the toggle is set to Login, THEN you are presented with two inputs for an email address and a pasword and login button

* WHEN you enter a valid email address and create a password and click on the signup button, THEN your user account is created and you are logged in to the site.

* WHEN you enter your account's email address and password and click on the login button, THEN the modal closes and you are logged in to the site.

* WHEN you are logged in to the site, THEN the menu options change to Search for Books, an option to see your saved books, and Logout

* WHEN you are logged in and enter a search term in the input field and click the submit button, THEN you are presented with several search results, each featuring a book's title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

* WHEN I click on the Save button on a book, THEN that book's information is saved to my account

* WHEN I click on the option to see my saved books, THEN I am presented with all of the books I have saved to my account, each featuring the book's title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account.

* WHEN I click on the Remove button on a book, THEN that book is deleted from my saved books list

* WHEN I click on the Logout button, THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button


## Rest API Routes
* This application provides Rest APIs for an e-commerce backend application

1. /api/categories
  * `GET` all categories
  * `GET` a single category by its `id` and populated products
  * `POST` a new category
  * `PUT` to update a category by its `id`
  * `DELETE` to remove category by its `id`

2. /api/products
  * `GET` to get all products and all of associated tags
  * `GET` to get a single product by its `id` and all of its associated tags
  * `POST` to create a new product and to associate the new product with `tagIds`
  * `PUT` to update a product by its `id`
  * `DELETE` to remove a product by its `_id`  

3. /api/thoughts/:thoughtId/reactions
  * `GET` to get all tags and all of associated products
  * `GET` to get a single tag by its `id` and all of its associated products
  * `POST` to create a new tag and to associate the new tag with `productIds`
  * `PUT` to update a tag by its `id`
  * `DELETE` to remove a tag by its `_id`  


## Database Models

This application's database contains the following four models:

* `Category`  
  * `id`
  * Integer  
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `category_name`  
  * String  
  * Doesn't allow null values

* `Product`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_name`  
  * String  
  * Doesn't allow null values  
  * `price`  
  * Decimal
  * Doesn't allow null values  
  * Validates that the value is a decimal
  * `stock`  
  * Integer
  * Doesn't allow null values  
  * Set a default value of 10  
  * Validates that the value is numeric
  * `category_id`  
  * Integer
  * References the `category` model's `id`
  

* `Tag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `tag_name`  
  * String  

* `ProductTag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_id`  
  * Integer  
  * References the `product` model's `id`
  * `tag_id`  
  * Integer  
  * References the `tag` model's `id`


## Associations
Four database models have the following relationships between them:
* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
* `Category` has many `Product` models.
* `Product` belongs to many `Tag` models.  Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.
* `Tag` belongs to many `Product` models.


## Walkthrough Video
https://drive.google.com/file/d/1N0QrQbP3RqnyN9QxMiiXK89BWkpQlmIG/view

## Installation on your local machine
After downloading from GitHub, you can run this program on your local machine by following the procedure below:
1. From a terminal, log into your mySQL account by using `mysql -u ${your login name} -p`.
2. Inside logged mySQL terminal, type `source ${downloaded-application-path}/db/schema.sql`.
3. Open another terminal to run javascript e-commerce back-end server application.
4. Run `npm run seed` to seed data. Seed data create 5 categories, 5 product and 8 tags. 
5. Run `nodemon server.js` to run backend server on your local machine.
6. From Insomnia, send Restful API queries.

## Technologies used
1. Express.js (https://expressjs.com/)
2. MySQL2 (https://www.npmjs.com/package/mysql2)
3. Sequalize (https://www.npmjs.com/package/sequelize)
4. dotenv package (https://www.npmjs.com/package/dotenv) 

## Source Code References
  This project has used some reference codes from the following sites

   * https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-07-2023-U-LOLC.git   


## Contact
  * Author: Kyosook Shin
  * Author's Email: kyosook.shin@gmail.com  
  * GitHub: https://github.com/alla0810/e-commerce


## Screenshot  

<img src='./images/screen1.png' width="800">  
<img src='./images/screen2.png' width="800">
<img src='./images/screen3.png' width="800">  
<img src='./images/screen4.png' width="800">  
<img src='./images/screen5.png' width="800">  
