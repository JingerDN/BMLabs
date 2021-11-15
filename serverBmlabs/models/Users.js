const { Schema, model, Types, models } = require("mongoose");
const userSchema = new Schema({
  id: {type: String,required: true,unique: true},  
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  gender: {type: String, required: true},
  ip_address:{type: String,required: true},
});

const Users=model("Users", userSchema);
module.exports.Users=Users;
