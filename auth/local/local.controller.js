const { getUserByEmail } = require('../../api/users/users.services')
const { signToken } = require('../../auth/auth.service')

const handlerLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    console.log(user._id)
    const token = signToken(email)
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  handlerLoginUser
}
