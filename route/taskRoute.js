const express=require("express");
const taskRoute= express.Router();
const authentication=require("../middleware/authMiddleware")

const {post,update,del,retrive}=require("../controller/taskController")




taskRoute.post("/new",authentication,post);
taskRoute.patch("/:id",authentication,update);
taskRoute.delete("/:id",authentication,del)
taskRoute.get("/",authentication,retrive)


module.exports=taskRoute