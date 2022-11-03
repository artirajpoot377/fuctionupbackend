const express = require('express');
const router = express.Router();
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const user1Controller= require("../controllers/user1Controller")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")

//router.get("/test-me", function (req, res) {
  //  res.send("My first ever api!")
//})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
/*router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)*/


//----------------------assignment----------------------------------


router.post("/createorder",commonMW.myMiddleware,commonMW.midd1 , orderController.createorder)
router.post("/createproduct", productController.createproduct)
router.post("/createuser1", commonMW.myMiddleware,user1Controller.createuser1)
module.exports = router;