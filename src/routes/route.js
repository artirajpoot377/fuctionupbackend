const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictsfind/:district_Id", CowinController.getDistrictsfind)
router.get("/Weather/WeatherByCity", CowinController.weatherBycity)
router.get("/Weather/getlondonweather", CowinController. getlondonweather)
router.get("/Weather/sortcities", CowinController. sortcities)
router.post("/memes/getMems", CowinController. getMems)
router.get("/memes/getMemsall", CowinController. getMemsall)
//router.get("/memes/getMemsallbyid", CowinController. getMemsallbyid)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;