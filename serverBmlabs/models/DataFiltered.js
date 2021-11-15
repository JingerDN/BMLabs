//statistics {"user_id":33,"date":"2019-10-02","page_views":260,"clicks":565}
// user {"id":1,"first_name":"Christie","last_name":"Gann","email":"cgann0@hostgator.com","gender":"Female","ip_address":"57.14.195.231"}
 

const { Schema, model, Types, models } = require("mongoose");
const filterSchema = new Schema({
    id: {type: String,required: true,unique: true},  
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    gender: {type: String, required: true},
    ip_address:{type: String,required: true},
    //date: {type: String, required: true},
    //page_views: {type: String, required: true},
    //clicks: { type: String, required: true },
    
});

const DataFilter=model("DataFilter", filterSchema);
module.exports.DataFilter=DataFilter;

