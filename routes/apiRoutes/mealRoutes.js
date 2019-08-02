const router = require('express').Router();
const mealController = require('./../../controllers/mealController');

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/meal

router.route('/')
  // .get(authMiddleware.requireAuth, mealController.getMeals)
  .post(mealController.getMeals)
//   .post(authMiddleware.requireAuth, mealController.createMeal)
router.route('/choose')
  .get(mealController.mealChoose)

module.exports = router;