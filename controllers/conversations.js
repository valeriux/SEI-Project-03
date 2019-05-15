const Conversation = require('../models/Conversation')
// 2nd created converstation controller, then 3rd, added into route

function showRoute(req, res, next) {
  Conversation.findById(req.params.id)
  // Gets messaging users schema data, between ids data, cabin id, message content
    .populate('createdBy')
    .then(conversation => res.json(conversation))
    .catch(next)
}
// creates an array of 2 user schemas, with a userShema incorporating that user's message content, separated by a cabin id.
function createRoute(req, res, next){
  // content created between the current messaging user and the cabin creator
  req.body.between = [req.currentUser, req.body.cabin.createdBy]
  req.body.messages = [{
    content: req.body.message,
    user: req.currentUser
    // for code purposes, creating the first message in the chain
  }]
  Conversation.create(req.body)
    .then(conversation => res.status(201).json(conversation))
    .catch(next)
}
// when message posted (user has to be authenticated), data contains 'between ids', cabin id, chain of message content with user id, attached to enquirers userSchema
function messageCreateRoute(req, res, next) {
  // the content of the messages is attached to the current user?
  req.body.user = req.currentUser
  Conversation.findById(req.params.id)
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
