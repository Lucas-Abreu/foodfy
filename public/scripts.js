/* const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for (let card of cards)
{
    card.addEventListener('click', function()
    {
        document.querySelector('.modal-image img').setAttribute('src', card.querySelector('img').src)
        
        document.querySelector('.modal-title').innerHTML = card.querySelector('.card-title').innerHTML

        document.querySelector('.modal-other').innerHTML = card.querySelector('.card-author').innerHTML

        modalOverlay.classList.add('active');
    })
}

document.querySelector('.close-modal').addEventListener('click', function()
{
    modalOverlay.classList.remove('active')
}) */


// Adiciona o link das Receitas
const recipes = document.querySelectorAll('.card')
const recipes_id = document.querySelectorAll('.card input')

for (let id = 0; id < recipes.length; id++)
{
    recipes[id].addEventListener('click', function()
    {
        window.location.href = `/recipes/${recipes_id[id].value}`
    })
}

// Ativa os botões de mostrar/esconder
const buttons = document.querySelectorAll('.section-options')

for (let button of buttons)
{
    button.addEventListener('click', function()
    {
        const obj = document.querySelector('.' + button.id)

        if (obj.classList.contains(button.id) && !obj.classList.contains('active'))
        {
            obj.classList.add('active')
            button.innerHTML = 'ESCONDER'
        }
        else
        {
            obj.classList.remove('active')
            button.innerHTML = 'MOSTRAR'
        }
    })   
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

function addSteps() {
    const steps = document.querySelector("#steps");
    const fieldContainer = document.querySelectorAll(".step");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    steps.appendChild(newField);
}
  
document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

document
    .querySelector(".add-step")
    .addEventListener("click", addSteps);

    