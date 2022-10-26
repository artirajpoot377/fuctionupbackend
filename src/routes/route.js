const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

//router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook1", BookController.createBook1  )
router.get("/booklist", BookController. booklist )
router.get("/getbookyear", BookController. getbookyear )
router.get("/getinrbook", BookController. getinrbook )
router.get("/randombooks", BookController. randombooks )
router.get("/particularbook", BookController. particularbook )

module.exports = router;