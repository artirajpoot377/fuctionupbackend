const { ObjectId, model, isValidObjectId } = require("mongoose")
const { count } = require("console")
const orderModel = require("../models/orderModel")


/*const createorder= async function (req, res) {
    let data= req.body

    let savedData= await orderModel.create(data)
    res.send({msg: savedData})
}*/


const createorder= async function (req, res) {
    let data= req.body
    let user=data.userId
    let product=data.productId
    if(!isValidObjectId(user)){
        return res.send({message:"user id is not a validobject id"})
       }
       if(!isValidObjectId(product)){
        return res.send({message:"product id is not a validobject id"})
       }
       const date = new Date()
       let day = date.getDate();
       let month = date.getMonth() + 1;
       let year = date.getFullYear();
       
       
       let currentDate = `${day}-${month}-${year}`
       
       data["date"] = JSON.stringify(currentDate)
   
     let savedData= await orderModel.create(data)
    res.send({msg: savedData})
}
module.exports.createorder = createorder