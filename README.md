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




In order to access the admin panel on "/admin-dashboard".
Only after adding shopkeeper from admin panel, you can proceed to the login of the shopkeeper 

![This is an image](/Wallet1.JPG)
![This is an image](/Wallet2.JPG)
![This is an image](/Wallet3.JPG)

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
- Reactjs


## Features

The application will provide admin 

Admin can do the following:

Administrators can register a shop keeper with following fields

- Shop Location

- Username

- Password


Shopkeeper can do the following:

- Login or logout to the dashboard
- Add customer with mandatory fields: Name, Mobile, EmailID & Optional Field: Address.
- Customer wallet loading 
- Shop Keepers can choose a customer with typing mobile number and add some amount to his/her wallet.
- While adding each time wallet updates and increase the wallet balance.
- Shop keeper can choose customer to see the current wallet balance by typing mobile number.
- Customer wallet redeem feature
- Shop keeper can choose one customer by typing mobile number and type an amount to reduce the wallet amount.




