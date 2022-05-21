const {
  getAllFavs,
  getOneFav,
  createFav,
  deleteFav
} = require('./favs.Services')

async function handlerGetAllFavs (req, res) {
  try {
    const favs = await getAllFavs()
    res.status(200).json(favs)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function handlerGetFavById (req, res) {
  try {
    const fav = await getOneFav(req.params.id)
    res.status(200).json(fav)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function handlerCreateFav (req, res) {
  try {
    const fav = await createFav(req.body)
    res.status(201).json(fav)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function handlerDeleteFav (req, res) {
  try {
    await deleteFav(req.params.id)
    res.status(204).json()
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  handlerGetAllFavs,
  handlerGetFavById,
  handlerCreateFav,
  handlerDeleteFav
}
