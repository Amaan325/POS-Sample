const mongoose = require("mongoose");


const Category = mongoose.Schema({
    name : {
        type : String ,
    }, 
    description : {
        type : String ,
    } , 
});

module.exports = Category ;
