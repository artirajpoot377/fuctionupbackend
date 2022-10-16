const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
//importing external package
//const underscore = require('underscore')
const abc = require('../logger/logger')
const fd = require('../util/help')
const formatter = require('../validator/formatter')
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    //console.log("Calling my function ",xyz.myFunction())
    //console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    //let myArray = ['Akash', 'Pritesh', 'Sabiha']
    //let result = underscore.first(myArray)
    //console.log("The result of underscores examples api is : ", result)
    console.log(abc.myfunction1())
    console.log(`${fd.printdate1()}-${fd.printmonth1()}`)
    console.log(fd.getbatchinfo1())
    console.log(formatter.trimdata())
    console.log(formatter.uppercase())
    console.log(formatter.lowercase())

// problem 4
    const _ =require('lodash')

    let month=["January","February","March","April","May","June","july","August","September","October","November","December"];
    console.log(_.chunk(month,4))
    
    const oddNum=[1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddNum,9));
    
    const Num=[2,5,4,2,7]
    console.log(_.union(Num));
//.........4.......





    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

