const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let saveData= await UserModel.create(data)
    return res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const book=async function (req, res){
    let data =req.body
    let savedata=await UserModel.create(data)
    return res.send({msg: savedata})
}

    const getnewbook= async function (req, res){
        let allbooks=await UserModel.find()
        res.send({msg: allbooks})


    }
    module.exports.book= book
    module.exports.getnewbook=getnewbook

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData