const mongoose =require("mongoose")
const schema=mongoose.Schema
const blogSchema=new schema({
    title:String,
    subtitle:String,
    description:String
})  

const Blog=mongoose.model("Blog",blogSchema)
//User is the name of the model and userSchema is the schema defined above

module.exports=Blog
