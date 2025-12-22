const express = require("express");
const dbsangaConnectHu = require("./Database/connection");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");
const app = express();
const bcrypt = require("bcrypt");
require("dotenv").config()
dbsangaConnectHu();
app.use(express.json()); //
app.get("/", function (haha, hehe) {
  hehe.send("Hello World");
  // anything can be named in place of request and response but sequence should be kept in mind
});
app.get("/hello", function (req, res) {
  res.json({
    name: "homepage",
  });
});
app.get("/about", function (haha, hehe) {
  hehe.send("ABOUT WORLD ");
});
app.delete("/delete/:id", async function (req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User with that id deleted successfully!!",
  });
});
app.post("/register", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name, email, password);
  //    const{name,email,password}=req.body
  await User.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password,10),
  });
  res.json({
    message: "User registered successfully",
  });
});
app.get("/fetch-users", async function (req, res) {
  //respose ma user table ma vako user data sent garnu paryo
  const data = await User.find();
  res.json({
    data,
  });
});

app.get("/fetch/:id", async function (req, res) {
  //   const id=req.params.id
  const data = await User.findById(req.params.id).select("-password", "-__v");
  res.json({
    message: "Task performed successfully",
    data: data,
  });
});

app.delete("/delete", async function (req, res) {
  const id = req.body.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User with specific id deleted successfully!!",
  });
});

app.post("/create-blog", async function (req, res) {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;

  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });

  res.json({
    message: "Blog created successfully",
  });
});

app.get("/read-blog/:id", async function (req, res) {
  const blog = await Blog.findById(req.params.id);

  res.json({
    message: "Blog fetched successfully",
    blog,
  });
});
// const hashedPassword = password
//   ? bcrypt.hashSync(password, 10)
//   : undefined;

// await User.findByIdAndUpdate(
//   id,
//   { name, email, ...(hashedPassword && { password: hashedPassword }) }
// );


app.patch("/update-user/:id", async function (req, res) {
    // console.log("req")
  const id = req.params.id;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  console.log(req)
  await User.findByIdAndUpdate(id, { name, email, password });
  res.send({
    message: "user updated successfully",
  });
});


app.delete("/delete-blog/:id", async function (req, res) {
  const id = req.params.id;

  await Blog.findByIdAndDelete(id);

  res.json({
    message: "Blog deleted successfully",
  });
});

app.get("/fetch-blogs", async function (req, res) {
  const blogs = await Blog.find();

  res.json({
    blogs,
  });
});

app.post("/login",async function(req,res){
    const email=req.body.email
    const password=req.body.password
    const data=await User.findOne({email:email})
    if(!data){
        res.json({
            message:"Not registered!"
        })}
        else{
         const isMatched=bcrypt.compareSync(password,data.password) //Its return type is Boolean either True or False 
         if(isMatched){ 
            res.json({
                message:"Logged in success"
            })
         }else{
            res.json({
                message:"Invalid password"
            })
         }
         //it takes arguments as req.body.password and the entered data
        }
    }
)
app.listen(3000, function () {
  console.log("Server has started at port 3000");
});

// mongodb+srv://nodejs:<db_password>@cluster0.dskkb5t.mongodb.net/?appName=Cluster0
