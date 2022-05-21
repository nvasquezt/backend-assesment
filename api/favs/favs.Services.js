const FavsModel = require('./favsModel')

async function getAllFavs () {
  return await FavsModel.find()
}

async function getOneFav (id) {
  return await FavsModel.findById(id)
}

async function createFav (fav) {
  return await FavsModel.create(fav)
}

async function deleteFav (id) {
  return await FavsModel.findByIdAndDelete(id)
}

module.exports = {
  getAllFavs,
  getOneFav,
  createFav,
  deleteFav
}
