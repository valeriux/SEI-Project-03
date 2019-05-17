const Conversation = require('../models/Conversation')

function showRoute(req, res, next) {
  Conversation.findById(req.params.id)
    .populate('cabin', 'image title')
    .populate('messages.user', 'username photo')
    .then(conversation => res.json(conversation))
    .catch(next)
}

function createRoute(req, res, next){
  req.body.between = [req.currentUser._id, req.body.to]

  Conversation.create(req.body)
    .then(conversation => res.status(201).json(conversation))
    .catch(next)
}

function messageCreateRoute(req, res, next) {

  req.body.user = req.currentUser
  Conversation.findById(req.params.id)
    .populate('cabin', 'image title')
    .populate('messages.user', 'username photo')
    .then(conversation => {
      conversation.messages.push(req.body)
      return conversation.save()
    })
    .then(conversation => res.json(conversation))
    .catch(next)
}

module.exports = {
  show: showRoute,
  create: createRoute,
  messageCreate: messageCreateRoute
}
