const express = require("express");
const categoryRouter = express.Router();
const {getCategory ,createCategory, updateCategory , deleteCategory}   = require("../controllers/Category");
 

categoryRouter.route("/").post(createCategory);
categoryRouter.route("/:id").get(getCategory).patch(updateCategory).delete(deleteCategory) ;

module.exports = categoryRouter;