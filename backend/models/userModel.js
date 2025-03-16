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
    image: Buffer,
    skills : {
        type : [String],
        default : [""],
        required : true
    },
    interests : {
        type : String, 
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