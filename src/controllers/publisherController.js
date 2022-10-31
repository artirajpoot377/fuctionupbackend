const publisherModel= require("../models/publisherModel")

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data:publisherCreated })
}

const getpublisherData= async function (req, res) {
    let getpublish = await publisherModell.find()
    res.send({data: authors})
}


module.exports.getpublisherData= getpublisherData

module.exports.createpublisher= createpublisher