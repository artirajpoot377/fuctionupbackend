const { count } = require("console")
const productModel= require("../models/productModel")

const createproduct= async function (req, res) {
    let data = req.body
    //let authorId = data.dauthor_id
    //if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await productModel.create(data)
    res.send({data: savedData})
}

module.exports.createproduct= createproduct