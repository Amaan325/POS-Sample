const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
    name : {
        type : String ,
    }, 
    description : {
        type : String ,
    },
    isDeleted:{
        type : Boolean ,
        default:false
    },isActive:{
        type : Boolean ,
        default:true
    } 
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
