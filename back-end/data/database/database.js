let mysql=require("mysql")
let config=require("../config.json")
let con=mysql.createConnection({
    host:config.database.host,
    port:config.database.port,
    password:config.database.password,
    user:config.database.user,
    database:config.database.database_name
})



function connect(sql,callback){

con.query(sql,(err,result)=>{
    if(err){
        callback(err)
    }else{
        callback(result)
    }
})

}

module.exports={connect}