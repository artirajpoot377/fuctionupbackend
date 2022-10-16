var dates = new Date
function printdate(){
    return dates.getDate();
}
function printmonth(){
return dates.getMonth();
}

function getbatchinfo(){
    let w =3;
    let d =dates.getDay();
    return `lithium, w${w}d${d}, the topic for today is nodejs module system`
}
module.exports.printdate1=printdate
module.exports.printmonth1=printmonth
module.exports.getbatchinfo1=getbatchinfo

