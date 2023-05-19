const { Router } = require('express')
const UserController = require('../controllers/userController')
const authenticated = require('../middlewares/authenticated')

const router = Router()

router.use(authenticated)

router
    .post('/user', UserController.create)
    .get('/user', UserController.searchAll)
    .get('/user/id/:id', UserController.searchById)
    .put('/user/id/:id', UserController.edit)


module.exports = router
