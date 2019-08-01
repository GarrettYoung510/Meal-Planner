const router = require('express').Router();
const calcController = require("./../../controllers/calcControllers");

// const passportService = require('./../../services/passport');
// const authMiddleware = require('./../../middlewares/authMiddlewares');


// /api/calc

router.route('/')
.get(calcController.getBMR)
//.post(authMiddleware.requireAuth, calcController.createCalc)

module.exports = router;