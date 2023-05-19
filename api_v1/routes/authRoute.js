const { Router } = require('express')
const AuthController = require('../controllers/authController')

const router = Router()

router
    .post('/auth/requestCode', AuthController.requestCode)
    .post('/auth/confirmCode', AuthController.confirmCode)

module.exports = router