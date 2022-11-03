
/*const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}*/

const productModel = require("../models/productModel")
const user1Model = require("../models/user1Model")

const myMiddleware = (req, res, next)=>{
   
    let isFreeAppUser = req.headers.isfreeappuser
    if(isFreeAppUser=="true"){
        let data=req.body

        data["isFreeAppUser"]=Boolean(isFreeAppUser)

    next()
    }
    else if (
        isFreeAppUser=="false"){
            let data=req.body
            data["isFreeAppUser"]=Boolean('')
            next()
        }
        else{
            res.send("isFreeAppUser is require")
        }
    
}

const midd1 = async function (req , res , next ){
   


    let isFreeAppUser =( req.headers["isfreeappuser"])

    if (isFreeAppUser==="true"){
        next()
    }

    else if (isFreeAppUser==="false"){


        
          let artii= await productModel.find().select({price:1 , _id:0})
          let arti= await user1Model.find().select({balance:1 , _id:0})
          let PRICE =(artii[0].price)
          let BALANCE=(arti[0].balance)
        if (PRICE <= BALANCE){

            let last = BALANCE - PRICE

            let updateprice = await user1Model.updateOne( {
                $set : { balance : last}
            }

            ) 

            let daata= req.body
        daata["amount"] = PRICE

            
            next()
          }

          else{
            res.send("insufficient balance")   
          }
 }
}


/*const myOtherMiddleware = function(req, res, next){
    // Setting an attribute 'wantsJson' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    let acceptHeaderValue = req.headers["accept"]

    if(acceptHeaderValue == "application/json") {
        req.wantsJson = true
    } else {
        req.wantsJson = false
    }
    next()
}*/

//module.exports.mid1= mid1
//module.exports.mid2= mid2
//module.exports.mid3= mid3
//module.exports.mid4= mid4
module.exports.myMiddleware = myMiddleware
module.exports.midd1 = midd1
//module.exports.myOtherMiddleware = myOtherMiddleware
