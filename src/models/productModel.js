const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name:String,
	category:String,
	price:{
        require:true,
        type:Number
    }

}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)
