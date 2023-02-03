//expresss
const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

//Import Routes
const adminRoutes = require('./routes/adminRoutes')
const shopKeeperRoutes = require('./routes/shopkeeperRoutes')

//Database
const db = require('./config/db')

//middleware to log requests
const requestLog = require('./Middleware/requestLog')

//mongoose 
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)





//Middlewares
app.use(express.json())
app.use(cors())
app.use(requestLog)

//Routes
app.use('/shopKeeper', shopKeeperRoutes)
app.use('/admin', adminRoutes)

//PORT
const PORT = process.env.PORT




db.connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`)
        })
    } else {
        console.log(err);
    }
})

