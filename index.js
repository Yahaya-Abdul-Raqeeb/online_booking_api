const express =require("express")
require("dotenv").config();
const morgan =require("morgan")
const connectDB=require("./config/connectDB")

const app=express();

connectDB();
//middleware
app.use(express.json())
app.use(morgan("dev"))

//home route
app.get("/", (req, res)=>{
res.send("<h1>WELCOME TO OUR ONLINE BOOKING API</h1>")

})

const PORT=process.env.PORT||8000

app.listen(PORT, ()=>{
    console.log("Server is Active")
})