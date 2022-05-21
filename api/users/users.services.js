const UserModel = require('./users.model')

async function createUser (user) {
  return await UserModel.create(user)
}

async function getUserByEmail (email) {
  return await UserModel.findOne({ email })
}

module.exports = {
  createUser,
  getUserByEmail
}
