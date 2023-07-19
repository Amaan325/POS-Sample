const router = require("express").Router();
const adminRoutes = require("./admin/index");
const appRoutes = require("./app/index");

router.use("/admin", adminRoutes);
router.use("/", appRoutes);

module.exports = router;