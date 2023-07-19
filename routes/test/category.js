const express = require("express");
const categoryRouter = express.Router();
const {getCategory ,createCategory, updateCategory , deleteCategory}   = require("../../controllers/Category");
const { getAll, getOne ,createOne, updateOne, deleteOne } = require("../../utils/api-utils");
const Category = require("../../models/Category");


categoryRouter.route("/").post(createOne(Category));
categoryRouter.route("/:id").get(getOne(Category)).patch(updateOne(Category)).delete(deleteOne(Category)) ;
categoryRouter.route("/").get(getAll(Category));

module.exports = categoryRouter;