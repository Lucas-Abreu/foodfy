const cards = document.querySelectorAll('.card')

for (let card of cards)
{
    card.addEventListener('click', function()
    {
        document.querySelector('.modal-overlay').classList.add('active');
    })
}