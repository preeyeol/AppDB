const express=require("express");
const profileRoute=express.Router();
const authentication=require("../middleware/authMiddleware")
const profile=require("../controller/profileController")

profileRoute.post("/profile",authentication,profile)




module.exports=profileRoute;