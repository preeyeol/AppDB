const mongoose=require("mongoose");

const profile=mongoose.Schema({

userId:{
    type:String,
    required:true,
},
bio:{type:String},

socialLinks:{type:[String],
},
updatedAt:{
    type:String,
    default: new Date
}

});

const profileSchema=mongoose.model("profile",profile);

module.exports= profileSchema;