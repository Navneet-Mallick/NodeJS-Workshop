const jwt=require("jsonwebtoken")
require("dotenv").config()
function homePage(req, res) {
  res.json({
    name: "homepage",
  });
}
async function registerUser(req, res) {
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
}
async function deleteUser(req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User with that id deleted successfully!!",
  });
}
async function fetchUser(req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User with that id deleted successfully!!",
  });
}

async function deleteUserwithID(req, res) {
  const id = req.body.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User with specific id deleted successfully!!",
  });
}

async function updateUser(req, res) {
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
}

function  helloUser(haha, hehe) {
  hehe.send("Hello World");
  // anything can be named in place of request and response but sequence should be kept in mind
}
async function loginUser(req,res){
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
            const token=jwt.sign({name:"ramu"},process.env.JWT_SECRET,{
                expiresIn:"1d"
            })
            res.json({
                message:"Logged in success",
                token:token
            })
         }else{
            res.json({
                message:"Invalid password"
            })
         }
         //it takes arguments as req.body.password and the entered data
        }
    }
    module.exports={homePage,registerUser,deleteUser,fetchUser,deleteUserwithID,updateUser,helloUser,loginUser}