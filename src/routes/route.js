const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonmiddleware= require("../middlewares/commonMiddlewares")

//router.get("/test-me", function (req, res) {
  //  res.send("My first ever api!")
//})

router.post("/users", userController.createUser  )

router.post("/login",userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",commonmiddleware.auth, userController.getUserData)

router.put("/users1/:userId",commonmiddleware.auth, userController.updateUser)
router.delete("/deleteUser/:userId", commonmiddleware.auth,userController.deleteUser)

module.exports = router;