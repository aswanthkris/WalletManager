const shopkeeperModel = require('../Model/shopkeeperModel')
const customerModel = require('../Model/customerModel')
const jwt = require('jsonwebtoken')



//To login the shopkeeper into account 
const login = async (req, res) => {

    const validation = {
        shopkeeperLogin: false,
        passErr: false,
        invalidShopkeeper: false
    }

    try {
        const loginData = req.body
        const shopkeeper = await shopkeeperModel.findOne({ username: loginData.username })
        if (shopkeeper) {
            if (shopkeeper.password === loginData.password) {
                validation.shopkeeperLogin = true
                const token = jwt.sign({
                    username: shopkeeper.username

                }, 'secret123')
                console.log("shopkeeper exists token : ", token)
                res.status(200).json({ token, loggedIn: validation.shopkeeperLogin })
            } else {
                validation.passErr = true
                res.json({ passErr: validation.passErr })
                console.log("invalid password");
            }
        } else {
            validation.invalidShopkeeper = true
            res.json({ invalidShopkeeper: validation.invalidShopkeeper })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To add a new customer to database
const addCustomer = async (req, res) => {
    try {
        let validation = false
        let mobileValidation = false

        const customer = req.body.values
        const mobile = req.body.values.mobile
        const mobileLength = mobile.length

        if (mobileLength === 10) {
            const result = await customerModel.findOne({ mobile })

            if (result) {
                validation = true
                res.json({ message: "Mobile number already exist", validation, mobileValidation })
            } else {
                const response = await customerModel.create(customer)
                res.status(200).json({ message: "Customer added successfully", validation, mobileValidation })
            }
        } else {
            mobileValidation = true
            res.json({ message: "Please enter a 10 digit mobile number", mobileValidation })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To get cutstomer details from data base
const getCustomers = async (req, res) => {
    try {
        const response = await customerModel.find()
        res.status(200).json({ response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To add amount to wallet
const addWallet = async (req, res) => {
    try {
        const addAmount = req.body.addAmount
        const id = req.body.id
        const response = await customerModel.findOneAndUpdate({ _id: id }, { $inc: { wallet: addAmount } })
        res.status(200).json({ response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To redeem amount from wallet
const redeemWallet = async (req, res) => {
    try {
        let zero = false
        const id = req.body.id
        const redeemAmount = req.body.redeemAmount
        const result = await customerModel.findOne({ _id: id })
        const currentAmount = result.wallet
        if (redeemAmount > currentAmount) {
            zero = true
            res.json({ zero })
        } else {
            const response = await customerModel.updateOne({ _id: id }, { $inc: { wallet: -redeemAmount } })
            res.status(200).json({ zero, response })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To get the wallet details
const getWallet = async (req, res) => {
    try {
        const id = req.body.id
        const response = await customerModel.findOne({ _id: id })
        const wallet = response.wallet
        res.status(200).json({ wallet })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//To remove a customer
const removeCustomer = async (req, res) => {

    try {
        const id = req.body.id
        const response = await customerModel.findOneAndRemove({ _id: id })
        res.status(200).json({ response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { login, addCustomer, getCustomers, addWallet, getWallet, redeemWallet, removeCustomer }