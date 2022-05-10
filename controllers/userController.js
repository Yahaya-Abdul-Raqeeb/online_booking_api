const User = require("../models/userSchema")
const bcrypt= require("bcrypt")
const { generateToken } = require("../utils/generateToken");

//add a user
const addUser = async (req, res)=>{

//hashing password with becrypt
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.password, salt)


const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword


})

await newUser.save();
res.status(201).json({
    _id: newUser._id,
username:newUser.username,
email:newUser.email
});
}

//auth a user
async function loginUser(req, res) {
try{
const { email, password}=req.body
const user = await User.findOne({email})

if (user) {
const isMatch = await bcrypt.compare(password, user.password)
if (isMatch) {
  res.status(200).json({
    username: user.username,
    email:user.email,
    _id: user._id,
    token:generateToken(user._id),
  })
}else{
  res.status(401).json({
    message:"Invalid credentials"
  })
}

}else{
  res.status(401).json({
    message:"Invalid information"
  })
}

}catch {
  res.status(400).json({
    message: "user not found",
  });
}
 }

module.exports={addUser, loginUser}