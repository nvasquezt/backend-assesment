const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Favs'
  }
})

UserSchema.pre('save', async function (next) {
  const user = this
  try {
    if (!user.isModified('password')) {
      return next()
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    return next()
  } catch (error) {
    next(error)
  }
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password)
    return isMatch
  } catch (error) {
    throw new Error(error)
  }
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
