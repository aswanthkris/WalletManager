const mongoose = require('mongoose');
require('dotenv').config()



//connect to port
const PORT = process.env.PORT



//Connections
const MONGO_URI = process.env.MONGO_URI


module.exports = {
    connectToDb: (cb) => {
        mongoose.connect(MONGO_URI)
            .then(() => {
                console.log("connected to db")
                return cb()
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

