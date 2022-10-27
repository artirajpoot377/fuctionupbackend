const { count } = require("console")
//const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel.js")
const bookModel = require("../models/bookModel")

/*const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}*/




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

//assignemet

const createBook1=async function (req, res){
    let data=req.body
    let fetchdata=await bookModel.create(data)
    res.send({msg:fetchdata})
}

const creatauthor1=async function (req, res){
    let data=req.body
    let fetchdata=await authorModel.create(data)
    res.send({msg:fetchdata})

}

//2
const getbook=async function (req, res){
    let all=await authorModel.find({author_name:"chetan bhagat"})
    console.log(all)
    const [obj]=all
    const b= obj.author_id
    let allauthor=await bookModel.find({author_id:b})
    res.send({msg:all})
}



//3
const findauthor=async function (req, res){
   
    let getid=await bookModel.findOneAndUpdate({name:"two states"},{$set:{prices:100}}  ).select( {author_id:1, _id:0} )


    let getauthorName = await authorModel.find({author_id:1}).select( {author_name:1, prices:1,_id:0} )
    res.send({msg:getauthorName})

}


//4

const findPries = async function( req ,res){
    let allBooks = await bookModel.find({ prices: { $gte: 50, $lte: 100} } ).select({ author_id :1})
  let a  = [ ]
  for(i of allBooks){
    let objjj=await authorModel.findOne({author_id:(i.author_id)}).select({author_name:1,_id:0})
    
     a.push(i)
     a.push(objjj)
}
res.send({ msg : a})
}


//module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks
module.exports.createBook1= createBook1
module.exports.creatauthor1= creatauthor1
module.exports.findauthor= findauthor
module.exports.findPries= findPries
module.exports.getbook= getbook

