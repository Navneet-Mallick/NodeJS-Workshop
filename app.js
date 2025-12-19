const express=require("express") 
const app=express()

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





app.listen(3000,function(){
    console.log("Server has started at port 3000")  
    
})                                                                          
