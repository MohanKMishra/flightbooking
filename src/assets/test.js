let data =require( "./data.json")


let from = "bengaluru"
let to = "delhi"

let d = data.filter((e)=>{
    return from.toLowerCase()==e.originCity.toLowerCase() && to.toLowerCase()==e.destCity.toLowerCase() 
})


console.log(d);

