const main = document.querySelector('.main');
const wrapper = document.querySelector('.wrapper');
const modalBody = document.querySelector('.modal-body');

main.addEventListener('mousemove', function (e) {
    let width = main.offsetWidth;
    let height = main.offsetHeight;
    let x = e.clientX - main.offsetLeft;
    let y = e.clientY - main.offsetTop;
    let rotateY = 45 * (x / width - 0.5);
    let rotateX = -45 * (y / height - 0.5);
    wrapper.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
});

createPhoto();

async function createPhoto() {
    const wrapper = document.querySelector('.wrapper');
    const url = 'http://localhost:3000/api/images'

    const response = await fetch(url);
    const reusult = await response.json();

    for (let i = 0; i < reusult.length ; i++) {
        const photo = document.createElement('div');
        photo.classList.add('photo');
        photo.style.setProperty('--photo-x', `${Math.random() * 100}%`);
        photo.style.setProperty('--photo-y', `${Math.random() * 100}%`);
        const random = Math.random() * 95;
        photo.setAttribute('data-bs-toggle', 'modal');
        photo.setAttribute('data-bs-target', '#exampleModal');
        photo.style.setProperty('--photo-brightness', `${random}%`);
        photo.style.setProperty('--photo-z', `${random * 4 - 300}px`);
        photo.style.setProperty('--photo-index', `${Math.round(random)}`);
        photo.style.backgroundImage = `url(${reusult[i]})`;
        wrapper.appendChild(photo);
        photo.addEventListener('click', function () {
            modalBody.querySelector('img').src = reusult[i];
        });
    }
}