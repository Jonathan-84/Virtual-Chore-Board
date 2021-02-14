const router = require('express').Router();

const usersRoutes = require('./users-routes.js');

router.use('/users', usersRoutes);

module.exports = router;