const router = require('express').Router()

//SECURE ROOT//
//CABIN CONTROLLER//
//AUTH CONTROLLER//

router.get('/', (req, res) => res.json({message: 'Welcome to Cabin API'}))



module.exports = router
