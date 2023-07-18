const mongoose = require("mongoose");

const Product = mongoose.Schema({
    name : {
       type : String ,
       required : [true , "Name is required"] ,
    } ,
    id : {
       type : Number 
    } ,
    category : {
       type : String ,
    } ,
    price : {
       type : Number ,
       default : 0
    } ,
    barcode : {
       type : String 
    } ,
    stockQuantity : {
       type : Number ,
       default : 0
    }
}) ;

module.exports = Order ;
