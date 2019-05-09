const Cabin = require('../models/Cabin')

function indexRoute(req, res, next) {
  Cabin.find()
    .then(plants => res.json(plants))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
