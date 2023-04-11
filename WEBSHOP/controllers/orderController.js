const router = require('express').Router()
const orderModel = require('../models/orderModels')
const auth = require('../authentication/auth')



//CREATE A NEW ORDER IF USER IS LOGGED IN
router.post('/', auth.verifyToken, orderModel.createNewOrder)


//GET ALL ORDERS BY USER IF USER IS LOGGED IN , SEND BEARER TOKEN 
router.get('/orders', auth.verifyToken, orderModel.getAllOrders)




module.exports = router;