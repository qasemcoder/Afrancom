let config=require("./data/config.json")
let {Get_All_Prod}=require("./Server/serverRepo")
let express=require("express")
let app=express()
let bp=require("body-parser")
app.use(bp.json())
app.use(express.static(__dirname+"/data/images/"))


Get_All_Prod(data=>{
    console.log(data)
})