let bcrypt=require("bcrypt")
let config=require("./data/config.json")



function hash_password(password,callback){
bcrypt.hash(password,config.bcrypt.salat,(result)=>{
callback(result)
})
}



module.exports={hash_password}