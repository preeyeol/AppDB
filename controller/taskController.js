const taskSchema= require("../model/taskSchema");

const post= async (req,res)=>{

try{const {title,description}= req.body;

const newPost= await new taskSchema({
    title:title,
    description:description,
})
await newPost.save();

res.status(200).json({
    msg:"Task Created",
    post: newPost
})

}catch(err){
    res.status(400).json({err})
}
};


const update=async (req,res)=>{

    const id=req.params.id;

  const update=  await taskSchema.updateOne({_id:id},{$set:{
        title: req.body.title,
        body:req.body.body

    }})

    res.json({
        msg:"Updated successfully",
        update
    })
}

const del = async(req,res)=>{
    const id=req.params.id;
   await postSchema.deleteOne({_id:id})
   
    res.json({
       msg:"Deleted Successfully"
    })
   
   }

const retrive= async (req,res)=>{

const users= await taskSchema.find({});
res.json({users})

}



module.exports={post,update,del,retrive}