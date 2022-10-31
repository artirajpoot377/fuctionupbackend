const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

/*const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author1"
    }, 
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)*/

//     assignment 

const bookSchema = new mongoose.Schema( {
    name:String,
    author_id: {
        type: ObjectId,
        required: true,
        ref: "newauthor"
    }, 
 
		
	price:Number,
		ratings:Number,
		publisher_id: {
            type: ObjectId,
            required: true,
            ref: "newpublisher"
        }, 
ishardcover:{
     type:Boolean,
     default:false
}

   
}, { timestamps: true });
module.exports = mongoose.model('newbook', bookSchema)
