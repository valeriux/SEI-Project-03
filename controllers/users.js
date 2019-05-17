const User = require('../models/User')

function indexRoute(req, res, next) {
  User.find()
    .populate('cabins')
    .then(users => res.json(users))
    .catch(next)
}

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('cabins')
    .populate({
      path: 'conversations',
      populate: {
        path: 'between cabin'
      }
    })
    .then(user => res.json(user))
    .catch(next)
}

function createRoute(req, res, next) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}

function updateRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next)

}

function deleteRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function showProfileRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
}


function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  User.findById(req.params.id)
    .then(user => {
      user.comments.push(req.body)
      return user.save()
    })
    .then(user => res.json(user))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  showProfile: showProfileRoute,
  commentCreate: commentCreateRoute
}
