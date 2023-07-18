const express = require("express");
const userRouter = express.Router();
const {getInfo , createUser , updateInfo} = require("../controllers/Users");
 

userRouter.route("/").post(createUser);
userRouter.route("/:id").get(getInfo).patch(updateInfo) ;

module.exports = userRouter;