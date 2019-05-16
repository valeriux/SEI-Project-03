const Conversation = require('../models/Conversation')
// 2nd created converstation controller, then 3rd, added into route

function showRoute(req, res, next) {
  Conversation.findById(req.params.id)
  // Gets messaging users schema data, between ids data, cabin id, message content
    .populate('cabin', 'image title')
    .populate('messages.user', 'username photo')
    .then(conversation => res.json(conversation))
    .catch(next)
}
// creates an array of 2 user schemas, with a userShema incorporating that user's message content, separated by a cabin id.
function createRoute(req, res, next){
  // content created between the current messaging user and the cabin creator
  req.body.between = [req.currentUser._id, req.body.to] //CONVERSATION CREATE
  //**took out following as it was creating the first message in Cabin show which then gave content to
  // req.body.messages = [{
  //   content: req.body.content,
  //   user: req.currentUser
  //   // for code purposes, creating the first message in the chain (to be transferred from cabinShow to conversation page)
  // }]
  Conversation.create(req.body)
    .then(conversation => res.status(201).json(conversation))
    .catch(next)
}
// when message posted (user has to be authenticated), data contains 'between ids', cabin id, chain of message content with user id, attached to enquirers userSchema
function messageCreateRoute(req, res, next) {
  // the content of the messages is attached to the current user?
  req.body.user = req.currentUser
  Conversation.findById(req.params.id)
    .populate('cabin', 'image title')// populated here so all user data gets sent to front end, enabling the id name on messages other than just the last.
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
