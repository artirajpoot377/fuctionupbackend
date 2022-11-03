const { count } = require("console")
const user1Model= require("../models/user1Model")

const createuser1= async function (req, res) {
    let data = req.body
    //let authorId = data.dauthor_id
    //if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await user1Model.create(data)
    res.send({data: savedData})
}

module.exports.createuser1= createuser1
