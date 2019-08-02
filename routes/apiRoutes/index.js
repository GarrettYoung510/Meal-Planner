
const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
const calcRoutes = require('./calcRoutes');
<<<<<<< HEAD
//const mealRoutes = require('./mealRoutes');
=======
const mealRoutes = require('./mealRoutes');
>>>>>>> f3665468e1b4c12e732a822cf6df9643a7cb6bdc

// const mealRoutes = require('./mealRoutes');

const passportService = require("./../../services/passport");

const authMiddleware = require("./../../middlewares/authMiddlewares");
// / api prepended to these routes

router.route("/test").get(authMiddleware.requireAuth, (req, res) => {
  res.send(req.user);
});

router.use("/auth", authRoutes);

<<<<<<< HEAD
//router.use('/meal', mealRoutes);
=======
router.use('/auth', authRoutes);

// router.use('/todo', todoRoutes);
router.use('/meal', mealRoutes);

>>>>>>> f3665468e1b4c12e732a822cf6df9643a7cb6bdc
router.use("/calc", calcRoutes);

module.exports = router;
