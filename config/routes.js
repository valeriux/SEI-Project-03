const router = require('express').Router()

//SECURE ROOT//
const cabinsController = require('../controllers/cabins')
//AUTH CONTROLLER//

router.get('/', (req, res) => res.json({message: 'Welcome to Cabin API'}))
router.get('/cabins', cabinsController.index)
router.get('/cabins/:id', cabinsController.show)



module.exports = router
