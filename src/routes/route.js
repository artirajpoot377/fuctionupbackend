const express=require('express')
const router=express.Router();
const blockController = require("../controllers/blockController");





router.get("/blockchain",blockController.getBlockdata)
router.all("/*", (req, res)=>{ return res.status(400).send({status:false, message:"check your URL"}) })

module.exports = router
