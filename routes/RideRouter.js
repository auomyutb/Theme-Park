const router = require('express').Router()

const Controller = require('../controllers/RideController')

router.get('/', Controller.getRides)
router.post('/', Controller.createRide)
router.delete('/:id', Controller.deleteRide)

module.exports = router
