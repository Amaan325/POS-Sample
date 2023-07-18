const express = require("express");
const orderRouter = express.Router();
const {getOrder , getAllOrders , createOrder}  = require("../controllers/Order");
 

orderRouter.route("/").get(getAllOrders).post(createOrder);
orderRouter.route("/:id").get(getOrder) ;

module.exports = orderRouter;