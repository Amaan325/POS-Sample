const express = require("express");
const productRouter = express.Router();
const {getAllProduct , getProduct , updateProduct , addProduct , deleteProduct} = require("../controllers/Products");
const { getAll, createOne } = require("../utils/api-utils");
const Products = require("../models/Products");
 

productRouter.route("/").get(getAll(Products,{populate:["category"]})).post(createOne(Products));
productRouter.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = productRouter;