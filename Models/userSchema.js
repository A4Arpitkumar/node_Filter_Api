const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    gender : {
        type : String
    },
    phone : {
        type : Number
    },
    email : {
        type : String
    },
    city : {
        type : String
    },
    state :{
        type : String
    },
    age : {
        type : String
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;