let {connect}=require("../data/database/database")




function login(email,password,callback){

}

function Get_All_Prod(callback){
    let sql=`SELECT * FROM afrancom2222.products;`
    connect(sql,(result)=>{
        callback(result)
    })
}












module.exports={Get_All_Prod}