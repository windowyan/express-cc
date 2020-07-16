let express=require("../lib/express")

let app=express()
app.get("/",function(req,res){
    res.end("你好呀")
})

app.listen(3000,function(){
    console.log('server start'+3000)
})