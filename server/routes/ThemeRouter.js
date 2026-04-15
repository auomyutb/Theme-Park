const router = require('express').Router()

const Controller = require('../controllers/ThemeController')

router.get('/', Controller.getThemes)
router.post('/', Controller.createTheme)
router.delete('/:id', Controller.deleteTheme)


module.exports = router
