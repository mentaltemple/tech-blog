const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

//NEED TO DEFINE ROUTES
router.use("/users", userRoutes);
//HERE TOO
router.use("/projects", projectRoutes);

module.exports = router;
