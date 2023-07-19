const mongoose = require("mongoose");

const Order = mongoose.Schema({
    order_date : {
        type : Date ,
    }, 
    order_number : {
        type : Number ,
    } , 
    total_amount : {
        type : Number 
    } ,
    payment_status : {
        type : Boolean
    } ,
    isActive : {
        type : Boolean ,
        default : true 
    } ,
    isDeleted  : {
        type : Boolean ,
        default : false
    }
});

module.exports = mongoose.model("Order" , Order) ;


