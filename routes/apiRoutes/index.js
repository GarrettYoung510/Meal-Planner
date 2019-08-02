<<<<<<< HEAD
const router = require("express").Router();
const authRoutes = require("./authRoutes");
const calcRoutes = require("./calcRoutes");
=======

const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
const calcRoutes = require('./calcRoutes');
const mealRoutes = require('./mealRoutes');
>>>>>>> 981b233ef2ebd0bc265200c716dec7c1eeb13f5c

// const mealRoutes = require('./mealRoutes');

const passportService = require("./../../services/passport");

const authMiddleware = require("./../../middlewares/authMiddlewares");
// / api prepended to these routes

router.route("/test").get(authMiddleware.requireAuth, (req, res) => {
  res.send(req.user);
});

router.use("/auth", authRoutes);

<<<<<<< HEAD
// router.use('/todo', todoRoutes);
// router.use("/meal", mealRoutes);
=======
router.use('/auth', authRoutes);

// router.use('/todo', todoRoutes);
router.use('/meal', mealRoutes);
>>>>>>> 981b233ef2ebd0bc265200c716dec7c1eeb13f5c

router.use("/calc", calcRoutes);

module.exports = router;
