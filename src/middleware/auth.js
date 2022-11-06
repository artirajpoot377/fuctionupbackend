
const jwt = require("jsonwebtoken");

const auth = function logMethod (req, res, next) {
    token = req.headers["x-auth-token"]
  if(!token)
  return res.send({
    status:false,
    msz: "token Not avabile"
  })
  var decodedToken = jwt.verify(token,"arti");
  req.decodedToken=decodedToken
  if (!decodedToken)
    return res.send({status: false, msg: "token is invalid"});

    next()
  }
const authorise = function(req, res, next) {
    
   let userToBeModified = req.params.userId
     let userLoggedIn = req.decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
     
   
    next()
}
module.exports.auth=auth
module.exports.authorise=authorise

