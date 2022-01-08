const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/register', authMiddleware, userController.register)
router.post('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router