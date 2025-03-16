const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    skills : {
        type : [String],
        default : [""],
        required : true
    },
    city : String,
    country : String,
    experience : {
        type : Number,
        required : false
    }
});

module.exports = mongoose.model("user" , userSchema);