const express = require('express')
const router = express.Router()

const { adminLogin, addShopkeeper, getShopkeepers, removeShopkeeper } = require('../Controller/adminController')

router.post('/login', adminLogin)
router.post('/addShopkeeper', addShopkeeper)
router.get('/getShopkeepers', getShopkeepers)
router.post('/removeShopkeeper', removeShopkeeper)



module.exports = router 