const express= require("express");
const app= express();
const mongoose= require("mongoose");
app.use(express.json());
require("dotenv").config(".env");
const url=process.env.url
const userRoute=require("./route/userRoute");
const profileRoute=require("./route/profileRoute");
const taskRoute=require("./route/taskRoute");


app.use("/api/users",userRoute);
app.use("/api/users",profileRoute);
app.use("/api/tasks",taskRoute);



mongoose.connect(url).then(()=>{
    console.log("Connected to mongoDB")
}).catch(()=>{
    console.log("Cannot connect mongoDB")
})

app.listen(8075,()=>{
    console.log("The server is running on port 8075")
})






