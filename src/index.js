const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://artirajpoot:Btech2023@cluster0.korxmrm.mongodb.net/artirajpoot377?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


//    assignment  1/112022

/*app.use (
    function (req, res, next) {
  let dateobj =new Date();
  let date=( dateobj.getDate())
  let month =((dateobj.getMonth()+1))
  let year =dateobj.getFullYear();
  let hours=dateobj.getHours();
  let minutes=dateobj.getMinutes();
  let seconds=dateobj.getSeconds();
  console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds); 
        //console.log ("inside GLOBAL MW");
        next();
     
  }
  );*/

  app.use (
    function (req, res, next) {
        let ip = req.ip
        let path = req.path
        let Date = moment().format("YYYY-MM-DD hh:mm:ss");
        console.log(Date,',',ip,',',path);

        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
