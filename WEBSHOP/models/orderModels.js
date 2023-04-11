const mongoose = require('mongoose')
const Order = require('../schemas/orderSchema')


exports.createNewOrder = (req, res)=> {
    const { orderLines} = req.body;

if(!orderLines){
    return res.status({
        message:'you need to fill in all the felds'
    })
}

Order.create({
    orderLines,
    userId:req.userId
})
.then(data=>{res.status(201).json({userId: data.userId})
})
.catch(err => {
    return res.status(500).json({
        message:'something went super wrong',
        err:err.message
    })
})

}

exports.getAllOrders = async (req, res) => {
    const orders = await Order.find({userId:req.userId})
    res.status(200).json(orders)
}





