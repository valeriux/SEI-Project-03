const router = require('express').Router()

const usersController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')
const cabinsController = require('../controllers/cabins')
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({message: 'Welcome to Cabin API'}))

router.get('/cabins', cabinsController.index)
router.get('/cabins/:id', cabinsController.show)

router.get('/users/:id', usersController.show)
router.put('/users/:id', usersController.update)

router.post('/cabins', secureRoute, cabinsController.create)
router.put('/cabins/:id', secureRoute, cabinsController.update)
router.delete('/cabins/:id', secureRoute, cabinsController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
