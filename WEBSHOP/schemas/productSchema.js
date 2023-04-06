const { default: mongoose } = require('mongoose')

// const mongoose = require('mongoose')

const {Schema} = mongoose

const productSchema = new Schema ({
name:{type:String},
description:{type: String},
price:{type:Number},
imageURL:{type:String}
})


const product = mongoose.model('product', productSchema)

module.exports = product