const recipes = require('../data.js')

exports.index = function(req, res)
{
    res.render('recipes/home', {recipes})
}

exports.about = function(req, res)
{
    res.render('recipes/about')
}

exports.list = function(req, res)
{
    res.render('recipes/recipes', {recipes})
}

exports.find = function(req, res)
{
    const recipeIndex = req.params.index;
    
    res.render('recipes/recipe', {recipe: recipes[recipeIndex]})
}