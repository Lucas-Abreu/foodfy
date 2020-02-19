const data = require('../data.json')
const fs = require('fs')

const recipes = data.recipes

exports.home = function(req, res)
{
    res.render('recipes/home', { recipes })
}

exports.about = function(req, res)
{
    res.render('recipes/about')
}

exports.list = function(req, res)
{
    res.render('recipes/recipes', { recipes })
}

exports.find = function(req, res)
{
    const recipeIndex = req.params.id;

    const recipe = recipes.find(function(found){
        return (found.id == recipeIndex)
    })
    
    res.render('recipes/recipe', { recipe })
}

exports.redirect = function(req, res)
{
    res.redirect('/admin/recipes')
}

exports.index = function(req, res)
{
    res.render('admin/home', { recipes })
}

exports.create = function(req, res)
{
    res.render('admin/create')
}

exports.post = function(req, res)
{
    const keys = Object.keys(req.body)

    for (key of keys)
    {
        if (req.body[key] == '') return res.send('Please, fill all the fields.')
    }

    let { title, author, image_url, ingredients, steps, info } = req.body

    let id = 1

    const lastRecipe = recipes[recipes.length - 1]
     
    if(lastRecipe)
    {
        id = lastRecipe.id + 1
    }

    data.recipes.push
    ({
        id,
        title,
        author,
        image_url,
        ingredients,
        steps,
        info
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write file error!')
    })


    res.redirect('/admin')
}

exports.show = function(req, res)
{
    const recipeIndex = req.params.id;

    const recipe = recipes.find(function(found){
        return (found.id == recipeIndex)
    })
    
    res.render('admin/recipe', { recipe })
}

exports.edit = function(req, res)
{
    const recipeIndex = req.params.id;

    const recipe = recipes.find(function(found){
        return (found.id == recipeIndex)
    })

    res.render('admin/edit', { recipe })
}

exports.put = function(req, res)
{
    
    const recipeIndex = req.params.id;
    let index = 0

    const recipe = recipes.find(function(found){
        index ++ 
        return (found.id == recipeIndex)
    })
    
    const newRecipe = req.body

    newRecipe.id = Number(newRecipe.id)

    data.recipes[index - 1] = newRecipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write file error!')
    })

    res.redirect('/admin')

}

exports.delete = function(req, res)
{
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function(recipe)
    {
        return (recipe.id != id)
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write file error!')
    })

    const newRecipes = require('../data.json')
    
    setTimeout(function(){
        res.render('admin/home', { newRecipes })
    }, 1500)
}