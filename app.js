const express=require("express") 
const dbsangaConnectHu=require("./Database/connection")
const User = require("./models/userModel")
const app=express()

dbsangaConnectHu()
app.get("/",function(haha,hehe){
    hehe.send("Hello World") 
    // anything can be named in place of request and response but sequence should be kept in mind 
})
app.get("/hello", function (req, res) {
    res.json({
        name: "homepage"
    });
});
app.get("/about",function(haha,hehe){
    hehe.send("ABOUT WORLD ") 
})

app.get("/fetch",async function(req,res){
    //respose ma user table ma vako user data sent garnu paryo
    const data= await User.find()
    res.json({
        data,    //we can also 
    })
})



app.listen(3000,function(){
    console.log("Server has started at port 3000")  
    
})                                                                          


// mongodb+srv://nodejs:<db_password>@cluster0.dskkb5t.mongodb.net/?appName=Cluster0
