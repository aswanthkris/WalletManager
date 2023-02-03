# WalletManager

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)


## Introduction

A wallet management web application using Node js, Express js, and MongoDb.

NOTE: Please read the RUN section before opening an issue.

## Demo


The platform is to manage wallets of customers by a shopkeeper. An admin can manage the shopkeepers.
Please <u><b>DO NOT</b></u> provide real card number and data.



In order to access the admin panel on "/admin-dashboard".
Only after adding shopkeeper from admin panel, you can proceed to the login of the shopkeeper 

![This is an image](/MiniProjecthome.JPG)
## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variable that you need to set in order to run the application:



- PORT: Specify the port Number
- MONGO_URI:  Specify the MongoDB URI to connect to the database

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm run dev` in the Frontend folder and `nodemon` in Backend folder and the application should work.

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express 
- Bootstrap 
- AJAX
- JQuery
- Razorpay
- Twilio

Deployed in AWS EC2 instance with Nginx reverse proxy

## Features

The application displays different category of products such as footware,clothes and accessories.

Users can do the following:

- Create an account, login or logout
- Browse available products added by the admin
- Add products to the shopping cart and wishlist
- Delete products from the shopping cart and wishlist
- Display the shopping cart
- To checkout, a user must be logged in
- Checkout information is processed using razorpay and paypal the payment is send to the admin
-Also There is option for COD
- The profile contains all the orders a user has made
- View Order details, and cancel the orders
- Update their profile
- Search and filter products
 


Admins can do the following:

- Login or logout to the admin panel
- Display month wise sales report in bar chart
- Display product wise sales report in pie chart 
- Download sals report in pdf and excel 
- Add products
- Admin Can crop images all the image before upload
- Veiw sale reports
- View, edit or delete their products
- Change the orders status
- Manage users
- View all orders done by users
- Manage users home page 



 Copyright 2022 © [Aswanth Krishna](https://github.com/aswanthkris)
