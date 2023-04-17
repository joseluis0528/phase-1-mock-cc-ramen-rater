// write your code here

document.addEventListener('DOMContentLoaded', () => {
    fetchRamen();
})

function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => console.log(ramens.forEach(ramen => renderRamen(ramen))))
}

function renderRamen(ramen) {
    const getRamenMenu = document.querySelector('#ramen-menu')
    const img = document.createElement('img');
    img.className = 'detail-image';
    img.src = ramen.image;
    img.alt = ramen.name;
    getRamenMenu.append(img);
    img.addEventListener('click', () => {
        const imgDetails = document.querySelector('#ramen-detail .detail-image');
        imgDetails.src = ramen.image;
        imgDetails.alt = ramen.name;
        const h2 = document.querySelector('.name');
        h2.textContent = ramen.name;
        const h3 = document.querySelector('.restaurant');
        h3.textContent = ramen.restaurant;
        const rating = document.querySelector('#rating-display');
        rating.textContent = ramen.rating;
        const comments = document.querySelector('#comment-display');
        comments.textContent = ramen.comment;
    })
}