const express = require('express')
const routes = express.Router()

const recipes = require('./controllers/recipes')


routes.get('/', recipes.index)

routes.get('/about', recipes.about)

routes.get('/recipes', recipes.list)

routes.get('/recipes/:index', recipes.find)

module.exports = routes