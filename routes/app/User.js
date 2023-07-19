const express = require("express");
const userRouter = express.Router();
const {getOne  ,updateOne , getAll , createOne } = require("../../utils/api-utils")
const User = require("../../models/Users");

userRouter.route("/").post(createOne(User));
userRouter.route("/:id").get(getOne(User)).patch(updateOne(User)) ;

module.exports = userRouter;