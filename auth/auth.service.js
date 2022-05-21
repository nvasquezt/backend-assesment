const { getUserByEmail } = require('../api/users/users.services')
const compose = require('composable-middleware')
require('dotenv').config()

const jsonwebtoken = require('jsonwebtoken')

/**
 *
 * @param {req} req - The request object.
 * @param {res} res - The response object.
 * @returns {object} - The response object.
 * @description - This function is used to authenticate the user.
 * @returns
 */
function isAuth () {
  try {
    return compose().use(async (req, res, next) => {
      const authHeader = req.headers.authorization
      if (!authHeader) {
        return res.status(401).json('No token provided')
      }
      const token = authHeader.split(' ')[1]
      const payload = await verifyToken(token)
      if (!payload) {
        return res.status(401).json('Invalid token')
      }
      const user = await getUserByEmail(payload)
      if (!user) {
        return res.status(401).json('User not found')
      }
      req.user = user
      next()
    })
  } catch (error) {
    throw new Error(error)
  }
}
/**
 *
 * @param {*} allowedRoles
 * @returns if the user is in the allowed roles
 * @description - This function is used to authenticate the user.
 */
function hasRole (allowedRoles = []) {
  try {
    return compose().use(isAuth())
      .use(async (req, res, next) => {
        const { role } = req.user
        if (!allowedRoles.includes(role)) {
          return res.status(401).json('Unauthorized')
        }
        next()
        return null
      })
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * Returns a decoded JWT token by the app's secret key.
 * @param {string} token - The JWT token to be verified.
 * @returns {object} - The decoded JWT token.
 */
async function verifyToken (token) {
  try {
    const payload = await jsonwebtoken.verify(token, process.env.JWT_SECRET)
    return payload
  } catch (error) {
    return null
  }
}

/**
 * Returns a JWT token by the app's secret key.
 * @param {string} payload  - The payload to be signed.
 * @returns {string} - The signed JWT token.
 */
function signToken (payload) {
  const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET)
  return token
}

module.exports = {
  signToken,
  verifyToken,
  isAuth,
  hasRole
}
