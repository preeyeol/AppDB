const userSchema = require("./../model/userSchema");
var validator = require("email-validator");
validator.validate("test@email.com");

const validateRegister=(req, res, next)=> {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Add more validations like email format, password strength, etc.


    next();
  }


  module.exports=validateRegister