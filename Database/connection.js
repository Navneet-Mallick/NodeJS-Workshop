const mongoose=require("mongoose")
async function dbsangaConnectHu(){     //Camel Case is Followed 
    await mongoose.connect("mongodb+srv://nodejs:hello@cluster0.dskkb5t.mongodb.net/?appName=Cluster0")
console.log("Database connected successfully")
}

module.exports=dbsangaConnectHu
