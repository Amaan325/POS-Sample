const mongoose = require("mongoose");
const Category = require("./Category");

const Product = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is required"]
   },
   id: {
      type: Number
   },
   category: [{
      type: Category,
      ref: 'Category'
   }
   ],
   price: {
      type: Number,
      default: 0
   },
   barcode: {
      type: String
   },
   stockQuantity: {
      type: Number,
      default: 0
   }
}
   ,
   {
      timestamps: true
   });

module.exports = mongoose.model("Product", Product);
