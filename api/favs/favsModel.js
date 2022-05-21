const mongoose = require('mongoose')

const FavSchema = new mongoose.Schema({
  music: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  movies: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  books: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  outfits: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  food: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  makeup: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  sports: [{
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    url: String
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const FavsModel = mongoose.model('Fav', FavSchema)

module.exports = FavsModel
