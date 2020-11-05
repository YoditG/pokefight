//const mockdata = require('../static/mockdata')
const poketroller = require('../controllers/pokeController')
const pokeCheck = require('../middlewares/pokeCheck')
const express = require('express')
const pokeRouter = express.Router()

pokeRouter.get('/',poketroller.getAllPoke)
pokeRouter.get('/:id?',pokeCheck.pokeValidation,poketroller.getOnePoke)
pokeRouter.get('/:id/:info',pokeCheck.pokeValidation,poketroller.getOnePokesInfo)

module.exports = pokeRouter

