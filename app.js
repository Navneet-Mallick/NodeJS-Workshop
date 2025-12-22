const express = require("express");
const dbsangaConnectHu = require("./Database/connection");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");
const app = express();
// const jwt=require("json-web-token")
const bcrypt = require("bcrypt");
const {homePage,deleteUser,fetchUser,deleteUserwithID, registerUser,updateUser,helloUser,loginUser} = require("./controllers/userController");
const { createBlog, readBlog,deleteBlog } = require("./controllers/blogController");
require("dotenv").config()
dbsangaConnectHu();
app.use(express.json()); //
app.get("/", helloUser);
app.get("/hello", homePage);
app.get("/about", function (haha, hehe) {
  hehe.send("ABOUT WORLD ");
});
app.delete("/delete/:id", deleteUser); //Refactoring 
app.post("/register", registerUser);
app.get("/fetch-users", fetchUser);

// app.get("/fetch/:id", async function (req, res) {
//   //   const id=req.params.id
//   const data = await User.findById(req.params.id).select("-password", "-__v");
//   res.json({
//     message: "Task performed successfully",
//     data: data,
//   });
// });

app.delete("/delete", deleteUser);

app.post("/create-blog", createBlog);

app.get("/read-blog/:id",readBlog );
// const hashedPassword = password
//   ? bcrypt.hashSync(password, 10)
//   : undefined;

// await User.findByIdAndUpdate(
//   id,
//   { name, email, ...(hashedPassword && { password: hashedPassword }) }
// );


app.patch("/update-user/:id", updateUser);


app.delete("/delete-blog/:id", deleteBlog);

// app.get("/fetch-blogs", async function (req, res) {
//   const blogs = await Blog.find();

//   res.json({
//     blogs,
//   });
// });

app.post("/login",loginUser)
app.listen(3000, function () {
  console.log("Server has started at port 3000");
});

// mongodb+srv://nodejs:<db_password>@cluster0.dskkb5t.mongodb.net/?appName=Cluster0
