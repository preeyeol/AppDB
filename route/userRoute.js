const express=require("express");
const userRoute= express.Router();

const {register,login,}=require("../controller/userController");
const validateRegister=require("../middleware/validRegister")



userRoute.post("/register",validateRegister,register)
userRoute.post("/login",login);



module.exports=userRoute