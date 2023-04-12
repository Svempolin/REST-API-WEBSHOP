const mongoose = require('mongoose');
const { Schema } = mongoose;


const orderLineSchema = mongoose.Schema({product: mongoose.Schema.Types.ObjectId, quantity:Number})
    
const orderSchema = new Schema({
    userId: {type: Schema.Types.ObjectId},
    orderLines: {type: [orderLineSchema]},
   
},
{timestamps: true});

module.exports= mongoose.model('Order', orderSchema);



