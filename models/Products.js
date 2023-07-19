const mongoose = require("mongoose");
const Category = require("./Category");

const Product = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is required"]
   },
   sku: {
      type: String
   },
   category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "Catgeory Must Belong To Category Collection!"],
   },
   price: {
      type: Number,
      default: 0
   },
   barcode: {
      type: String
   },
   quantity: {
      type: Number,
      default: 0
   },
   isDeleted:{
      type : Boolean ,
      default:false
  },isActive:{
      type : Boolean ,
      default:true
  } 
}
   ,
   {
      timestamps: true
   });

module.exports = mongoose.model("Product", Product);
