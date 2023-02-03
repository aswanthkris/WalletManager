const adminModel = require('../Model/adminModel')
const shopkeeperModel = require('../Model/shopkeeperModel')
const jwt = require('jsonwebtoken')




//admin login
const adminLogin = async (req, res) => {

    const validation = {
        adminLog: false,
        passErr: false,
        invalidAdmin: false
    }

    try {

        const adminDetails = req.body

        const admin = await adminModel.findOne({ name: adminDetails.name })
        if (admin) {
            if (admin.password === adminDetails.password) {
                validation.adminLog = true
                const adminToken = jwt.sign({
                    name: admin.name
                }, "secret123")
                res.json({ adminToken, loggedIn: validation.adminLog })
            } else {
                validation.passErr = true
                res.json({
                    passErr: validation.passErr, message: "The entered password is wrong"
                })
            }
        } else {
            validation.invalidAdmin = true
            res.json({
                nameErr: validation.invalidAdmin, message: "There is no such Admin exists"
            })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To add a new shopkeeper to database
const addShopkeeper = async (req, res) => {
    try {
        let validation = false
        const shopkeeper = req.body.values
        const username = shopkeeper.username

        const result = await shopkeeperModel.findOne({ username })
        if (result) {
            validation = true
            res.json({ message: "Username already exist", validation })
        } else {
            const response = await shopkeeperModel.create(shopkeeper)
            res.status(200).json({ message: "Added successfully", validation })
        }


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//TO get all the shopkeepers to display
const getShopkeepers = async (req, res) => {
    try {
        const data = await shopkeeperModel.find()
        res.status(200).json({ data })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To remove a shopkeeper
const removeShopkeeper = async (req, res) => {

    try {
        const id = req.body.id
        const response = await shopkeeperModel.findOneAndRemove({ _id: id })
        res.status(200).json({ response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { adminLogin, addShopkeeper, getShopkeepers, removeShopkeeper }

