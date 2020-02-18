const data = require('../data.json')
const fs = require('fs')

exports.home = function(req, res)
{
    res.render('recipes/home', { data })
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

exports.redirect = function(req, res)
{
    res.redirect('/admin/recipes')
}

exports.index = function(req, res)
{
    res.render('admin/home', { data })
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

    let { image_url, ingredients, steps, info } = req.body

    let id = 1
    const lastRecipe = data.recipes[data.recipes.lenght - 1]
     
    if(lastRecipe)
    {
        id = lastRecipe.id + 1
    }

    data.recipes.push
    ({
        id,
        image_url,
        ingredients,
        steps,
        info
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write file error!')
    })


    res.render('admin/home', { data })
}