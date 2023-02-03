const express = require('express')
const app = express()



const requestLog = app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

module.exports = requestLog