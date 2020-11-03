//const mockdata = require('../static/mockdata')
const poketroller = require('../controllers/pokeController')
const express = require('express')
const pokeRouter = express.Router()

pokeRouter.get('/',poketroller.getAllPoke)

module.exports = pokeRouter

