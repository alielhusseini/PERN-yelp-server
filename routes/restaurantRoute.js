const router = require('express').Router()
const restaurantController = require('../controllers/restaurantController')
const middlewareAuthTest = require('../middlewares/test')

router.get('/', restaurantController.getAllRestaurants)
router.post('/', middlewareAuthTest, restaurantController.postNewRestaurant)
router.get("/:id", restaurantController.getRestaurant)
router.delete("/:id", middlewareAuthTest, restaurantController.deleteRestaurant)
router.put("/:id", middlewareAuthTest, restaurantController.updateRestaurant)

module.exports = router