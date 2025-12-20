const express=require("express") 
const dbsangaConnectHu=require("./Database/connection")
const User = require("./models/userModel")
const app=express()
const bcrypt=require("bcrypt")

dbsangaConnectHu()
app.use(express.json()) //
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
app.delete("/delete/:id",async function(req,res){
    const id=req.params.id
    await User.findByIdAndDelete(id)
    res.json({
        message:"User with that id deleted successfully!!"
    })
})
app.post("/register",async function(req,res){
   const name = req.body.name
   const email= req.body.email
   const password=req.body.password
   console.log(name,email,password)
//    const{name,email,password}=req.body
await User.create({
    name:name,
    email:email,
    password:bcrypt.hashSync(password,25)
})
res.json({
    message:"User registered successfully"
})
}) 
app.get("/fetch-users",async function(req,res){
    //respose ma user table ma vako user data sent garnu paryo
    const data= await User.find()
    res.json({
        data,   
    })
})

app.delete("/delete",async function(req,res){
    const id=req.body.id
    await User.findByIdAndDelete(id)
    res.json({
        message:"User with specific id deleted successfully!!"
    })
})

app.listen(3000,function(){
    console.log("Server has started at port 3000")  
    
})                                                                          


// mongodb+srv://nodejs:<db_password>@cluster0.dskkb5t.mongodb.net/?appName=Cluster0
