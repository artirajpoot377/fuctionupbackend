const { ObjectId, model, isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

/*const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails*/

//assignment
const createBook= async function (req, res) {
    let book = req.body
    let author=book.author_id
    let publisher=book.publisher_id
   
   if(!author){
      return res.send("author is required")
   }
   if(!publisher){
    return res.send("publisher is required")
 }
   if(!isValidObjectId(author)){
    return res.send({message:"author id is not a validobject id"})
   }
   if(!isValidObjectId(publisher)){
    return res.send({message:"publish id is not a validobject id"})
   }

     let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})

   
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getbookwithauthorpublishdetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}
//  question  4

const question4= async function (req, res) {
   
    let obj1 = await publisherModel.findOne({name: "Penguin" })
    let id1 = obj1._id
    let obj2 = await publisherModel.findOne({name: "harpercollins" })
    let id2 = obj2._id

    let newbooks = await bookModel.updateMany(
        {publisher_id:[id1,id2]},
        {  $set: {"ishardcover":true} },
        {new:true}
        )
    let updatedbooks = await bookModel.find({"ishardcover":true})
    res.send({data:updatedbooks})
}


//question  5

const question5= async function (req, res) {
    
    let arr1 = await authorModel.find({rating:{$gt: 3.5} })
    let newarr=[]
    for(i of arr1){
        iid=i._id
      
       let tosend= await bookModel.findOneAndUpdate(
            {author_id:iid},
            {$inc:{"price":10}},
            {new:true} 
        )
        newarr.push(tosend)
    }
    res.send({mess:newarr})
    
    
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getbookwithauthorpublishdetails = getbookwithauthorpublishdetails
module.exports.question4= question4
module.exports.question5= question5