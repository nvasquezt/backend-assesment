const {
  createUser,
  getUserByEmail
} = require('./users.services.js')

async function handlerCreateUser (req, res) {
  try {
    const user = await createUser(req.body)
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function handlerUserByEmail (req, res) {
  try {
    const user = await getUserByEmail(req.params.email)
    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  handlerCreateUser,
  handlerUserByEmail
}
