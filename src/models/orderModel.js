const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {

userId:{
    type: ObjectId,
    required: true,
    ref: "order"
}, 
productId: {
        type: ObjectId,
        required: true,
        ref: "order"
    }, 
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
      
}, 
{ timestamps: true });

module.exports = mongoose.model('order', orderSchema)
