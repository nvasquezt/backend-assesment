const favs = require('./api/favs')
const users = require('./api/users')
const authLocal = require('./auth/local')

function routes (app) {
  app.use('/api/favs', favs)
  app.use('/api/users', users)
  app.use('/auth/local', authLocal)
}

module.exports = routes
