//{"user_id":33,"date":"2019-10-02","page_views":260,"clicks":565}

const { Schema, model, Types, models } = require("mongoose");
const statSchema = new Schema({
    user_id:{type:String,required:true},
    date: {type: String, required: true},
    page_views: {type: String, required: true},
    clicks: { type: String, required: true },
});

const Stat=model("Stat", statSchema);
module.exports.Stat=Stat;

//id: {type: String,required: true,unique: true},  
//first_name: {type: String, required: true},
//last_name: {type: String, required: true},
//email: { type: String, required: true, unique: true },
//gender: {type: String, required: true},
//ip_address:{type: String,required: true},