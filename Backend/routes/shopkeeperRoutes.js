const express = require('express')
const router = express.Router()

const { login, addCustomer, getCustomers, addWallet, getWallet, redeemWallet, removeCustomer } = require('../Controller/shopkeeperController')

router.post('/login', login)
router.post('/addCustomer', addCustomer)
router.get('/getCustomers', getCustomers)
router.post('/addWallet', addWallet)
router.post('/getWallet', getWallet)
router.post('/redeemWallet', redeemWallet)
router.post('/removeCustomer', removeCustomer)


module.exports = router 