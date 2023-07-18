const express = require("express");
const productRouter = express.Router();
const {getAllProduct , getProduct , updateProduct , addProduct , deleteProduct} = require("../controllers/Products");
 

productRouter.route("/").get(getAllProduct).post(addProduct);
productRouter.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = productRouter;