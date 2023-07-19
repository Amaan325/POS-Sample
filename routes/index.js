const router = require("express").Router();
const adminRoutes = require("./admin");
const appRoutes = require("./app");

router.use("/admin", adminRoutes);
router.use("/app", appRoutes);

module.exports = router;