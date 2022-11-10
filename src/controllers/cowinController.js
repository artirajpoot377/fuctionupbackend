let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
let getDistrictsfind = async function (req, res) {
    try {
        let id = req.query.district_id
        let date =req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data1 = result.data
        console.log(data1)
        res.status(200).send({ msg: data1 , status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//-------------------question 2----------------------------------------



const weatherBycity = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query data : ${q}  ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}


const getlondonweather = async function (req, res) {
    try {
        
        let appid = req.query.appid
        console.log(`query data : ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

let sortcities = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try {
        let Array = []
        for (let i = 0; i < cities.length; i++) {
            let q = cities[i]
            let appid = req.query.appid
           // console.log(`query data : ${q}  ${appid}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let cityweather = await axios(options)
            console.log(cityweather.data)

            Array.push({
                city : cityweather.data.name , 
                temp : cityweather.data.main.temp
            })

        }
        
        Array.sort((a,b)=>{
            return a.temp-b.temp
        })
        res.status(200).send({status:true, message: Array });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

//            ---memes---------
//-------------------getallmemes---------------------------
let getMemsall= async function (req, res) {
    try {

let options = {
    method: "get",
    url:`https://api.imgflip.com/get_memes`
}
let result = await axios(options)
res.status(200).send({msg :result.data})

}
catch (err) {
console.log(err)
res.status(500).send({ msg: err.message })
}
}
//---------------------------getmemesbyid--------------------------
/*let getMemsallbyid= async function (req, res) {
    try {
        let memesId = req.query.template_id
        let username = req.query.username
        let password =req.query.password
        let options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${memesId}&username=${username}&password=${password}`
        }
let result = await axios(options)
res.status(200).send({msg :result.data})

}
catch (err) {
console.log(err)
res.status(500).send({ msg: err.message })
}
}*/
//------------------------------------3--------------------------------

let getMems= async function (req, res) {
    try {

        let memesId  = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password =req.query.password
         let options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${memesId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`

        }
        let result = await axios(options)
        res.status(200).send({msg :result.data})
    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsfind = getDistrictsfind
module.exports.weatherBycity = weatherBycity
module.exports.getlondonweather = getlondonweather
module.exports.sortcities = sortcities
module.exports.getMems = getMems
module.exports.getMemsall = getMemsall
//module.exports.getMemsallbyid = getMemsallbyid
