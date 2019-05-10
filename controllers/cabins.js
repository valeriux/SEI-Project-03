const Cabin = require('../models/Cabin')

function indexRoute(req, res, next) {
  Cabin.find()
    .then(plants => res.json(plants))
    .catch(next)
}

function showRoute(req, res, next) {
  Cabin.findById(req.params.id)
  // POPULATE (createdby)
    .then(cabin => res.json(cabin))
    .catch(next)
}

function createRoute(req, res, next){
  //To add (req.body)
  Cabin.create(req.body)
    .then(cabin => res.status(201).json(cabin))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
}
