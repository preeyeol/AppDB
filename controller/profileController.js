const profileSchema=require("../model/profileSchema");


const profile= async(req,res)=>{

const users= await profileSchema.find({})
res.json({users})
}


module.exports=profile