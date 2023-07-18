const mongoose = require("mongoose");
const Products = require("./Products");

const Users = mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Name is required"]
    } ,
    email : {
        type: String ,
    } ,
    password : {
        type : Number ,
        required : [true , "Password is required"]
    } ,
    AddToCart : {
        type : Products 
    }
}) ;

module.exports = Users ;
