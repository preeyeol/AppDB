const mongoose = require("mongoose");

const task=mongoose.Schema({
  userId: {
    type: String,
    //required: true,
  },
  title: { type: String, required: true },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const taskSchema= mongoose.model("task",task);

module.exports=taskSchema