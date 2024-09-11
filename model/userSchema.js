const mongoose= require("mongoose");

const user=mongoose.Schema({
    email: {type:String, required:true, unique:true},  //validated as an email.
password: {type:String, required:true,select:false}, //hashed before saving.
confirmPassword: {type:String},
username: {type:String, required:true, unique:true},
createdAt: {type:Date, default:new Date},
isActive: {type:Boolean, default: true} //(to indicate if the user is active).
});

const userSchema=mongoose.model("user",user);

module.exports=userSchema;