const { Router } = require('express')
const {
  handlerCreateUser,
  handlerUserByEmail
} = require('./users.controller.js')

const router = Router()

router.post('/', handlerCreateUser)
router.get('/:email', handlerUserByEmail)

module.exports = router
