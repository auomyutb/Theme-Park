const router = require('express').Router()
const Controller = require('../controllers/RideController')

router.get('/', Controller.GetRides)
router.post('/', Controller.CreateRide)
router.delete('/:id', Controller.DeleteRide)

module.exports = router