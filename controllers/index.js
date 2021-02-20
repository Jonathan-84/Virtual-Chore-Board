const router = require("express").Router();

const usersRoutes = require("./users-routes.js");

router.use("/", usersRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
