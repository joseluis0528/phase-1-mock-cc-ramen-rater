// write your code here

document.addEventListener('DOMContentLoaded', () => {
    fetchRamen();
    newRamen();
})

function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => ramens.forEach(ramen => renderRamen(ramen)))
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

function newRamen() {
    const getForm = document.querySelector('#new-ramen');
    const name = getForm.querySelector('#new-name');
    const restaurant = getForm.querySelector('#new-restaurant');
    const img = getForm.querySelector('#new-image');
    const rating = getForm.querySelector('#new-rating');
    const comment = getForm.querySelector('#new-comment');
    const getButton = getForm.querySelectorAll('input')[4];
    getButton.addEventListener('click', () => {
        fetch('http://localhost:3000/ramens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: '',
                name: name.value,
                restaurant: restaurant.value,
                image: img.value,
                rating: rating.value,
                comment: comment.value,
            })
        })
        .then(response => response.json())
        .then(data => data)
    })
}