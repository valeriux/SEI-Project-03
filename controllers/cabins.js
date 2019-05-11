const Cabin = require('../models/Cabin')

function indexRoute(req, res, next) {
  Cabin.find()
    .then(cabin => res.json(cabin))
    .catch(next)
}

function showRoute(req, res, next) {
  Cabin.findById(req.params.id)
    .populate('createdBy')
    .then(cabin => res.json(cabin))
    .catch(next)
}

function createRoute(req, res, next){
  req.body.createdBy = req.currentUser
  Cabin.create(req.body)
    .then(cabin => res.status(201).json(cabin))
    .catch(next)
}
function updateRoute(req, res, next){
  req.body.modifiedBy = req.currentUser
  Cabin.findById(req.params.id)
    .then(cabin => cabin.set(req.body))
    .then(cabin => cabin.save())
    .then(cabin => res.json(cabin))
    .catch(next)
}
function deleteRoute(req, res, next) {
  Cabin.findById(req.params.id)
    .then(cabin => cabin.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
