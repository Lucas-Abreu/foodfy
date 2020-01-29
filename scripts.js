const cards = document.querySelectorAll('.card')
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
})