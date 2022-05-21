const { Router } = require('express')
const {
  handlerGetAllFavs,
  handlerGetFavById,
  handlerCreateFav,
  handlerDeleteFav
} = require('./favsController.js')

const { isAuth } = require('../../auth/auth.service')

const router = Router()

router.get('/', isAuth(), handlerGetAllFavs)
router.get('/:id', isAuth(), handlerGetFavById)
router.post('/', isAuth(), handlerCreateFav)
router.delete('/:id', isAuth(), handlerDeleteFav)

module.exports = router
