const express = require("express");
const productRouter = express.Router();
const {getAllProduct , getProduct , updateProduct , addProduct , deleteProduct} = require("../controllers/Products");
const { getAll, getOne ,createOne,updateOne ,deleteOne } = require("../utils/api-utils");
const Products = require("../models/Products");
 

productRouter.route("/").get(getAll(Products,{populate:["category"]})).post(createOne(Products));
productRouter.route("/:id").get(getOne(Products,{populate:["category"]})).patch(updateOne(Products)).delete(deleteOne(Products));

module.exports = productRouter;