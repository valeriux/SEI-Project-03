const secret = 'secret'
const port = process.env.PORT || 4000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/cabins-db'
module.exports = { secret, port, dbUri }
