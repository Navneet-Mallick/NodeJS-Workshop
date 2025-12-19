const mongoose =require("mongoose")
const schema=mongoose.Schema
const userSchema=new schema({
    name:String,
    email:String,
    password:String
})  //Class Object Creation  // email string name and password string are used to create the schema of user

mongoose.model("Users",userSchema)
//User is the name of the model and userSchema is the schema defined above

module.exports=Users
