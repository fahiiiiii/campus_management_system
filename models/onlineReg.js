const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    
    
    
    is_varified:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model('User',userSchema);