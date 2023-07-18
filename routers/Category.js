const express = require("express");
const categoryRouter = express.Router();
const {getCategory ,createCategory, updateCategory , deleteCategory}   = require("../controllers/Category");
const { getAll, createOne, updateOne, deleteOne } = require("../utils/api-utils");
const Category = require("../models/Category");


categoryRouter.route("/").post(createOne(Category));
categoryRouter.route("/:id").get(getCategory).patch(updateOne(Category)).delete(deleteOne(Category)) ;
categoryRouter.route("/").get(getAll(Category));

module.exports = categoryRouter;