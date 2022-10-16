const name1="  FunctionUp  "
function trimdata(){
    console.log(name1.trim());

}
function uppercase(){
  
console.log(name1.toUpperCase());
  
}
function lowercase(){
    console.log(name1.toLowerCase());  
}



module.exports.trimdata=trimdata
module.exports.uppercase=uppercase
module.exports.lowercase=lowercase