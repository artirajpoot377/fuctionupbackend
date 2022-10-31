const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

/*router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)*/

//   assignment
router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBook", bookController.createBook )
router.post("/createpublisher", publisherController.createpublisher )
router.get("/getpublisherData", publisherController.getpublisherData)
router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getbookwithauthorpublishdetails", bookController.getbookwithauthorpublishdetails  )
router.put("/question4", bookController.question4 )
router.put("/question5", bookController.question5 )

module.exports = router;