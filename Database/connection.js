const mongoose=require("mongoose")
async function dbsangaConnectHu(){     //Camel Case is Followed 
await mongoose.connect(process.env.connectionString)
console.log("Database connected successfully")
}

module.exports=dbsangaConnectHu
