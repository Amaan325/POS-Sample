const router = require("express").Router();

const categoryRouter = require("./Category");
const userRouter = require("./User");
const productRouter = require("./Products");
const orderRouter = require("./Order");

router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);

module.exports = router;