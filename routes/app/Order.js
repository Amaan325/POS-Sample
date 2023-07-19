const express = require("express");
const orderRouter = express.Router();
const {getOne  , getAll , createOne } = require("../utils/api-utils")
const Order = require("../models/Order");

orderRouter.route("/").get(getAll(Order)).post(createOne(Order));
orderRouter.route("/:id").get(getOne(Order)) ;

module.exports = orderRouter;