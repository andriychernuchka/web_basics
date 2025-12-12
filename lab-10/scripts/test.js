// елементи
const startButton = document.getElementById('startButton');
const movieCards = document.querySelectorAll('.movie-card');
const modal = document.getElementById('movieModal');
const closeModalButton = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalInfo = document.getElementById('modalInfo');
const easterEgg = document.getElementById('easterEgg');

// мобільне меню
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenuToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
});

navLinksItems.forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('nav') && navLinksContainer.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// рейтинги
function getRatingClass(rating) {
    const numRating = parseFloat(rating);
    if (numRating >= 8.0) return 'high';
    if (numRating >= 6.0) return 'medium';
    return 'low';
}

movieCards.forEach(function (card) {
    const rating = card.getAttribute('data-rating');
    const ratingElement = card.querySelector('.movie-rating');
    const ratingClass = getRatingClass(rating);
    ratingElement.classList.add(ratingClass);
});

// пасхалка
let clickCount = 0;
const gifModal = document.getElementById('gifModal');
const gifClose = document.getElementById('gifClose');
const gifImage = document.getElementById('gifImage');

easterEgg.addEventListener('click', function () {
    gifModal.style.display = 'flex';
});

gifClose.addEventListener('click', function () {
    gifModal.style.display = 'none';
});

gifModal.addEventListener('click', function (event) {
    if (event.target === gifModal) {
        gifModal.style.display = 'none';
    }
});

// кнопка "Перейти на сайт"
startButton.addEventListener('click', function () {
    modalTitle.textContent = 'Сайт тіки розробляється';
    modalInfo.textContent = 'Сайт ще не готовий, але якщо в мене буде бажання і живчик, я його зроблю (можливо)';
    modal.style.display = 'flex';
});

// картки фільмів
movieCards.forEach(function (card) {
    card.addEventListener('click', function () {
        const title = card.getAttribute('data-title');
        const rating = card.getAttribute('data-rating');
        const genre = card.getAttribute('data-genre');

        modalTitle.textContent = title;
        modalInfo.textContent = `Жанр: ${genre} | Рейтинг: ${rating}/10`;
        modal.style.display = 'flex';

        movieCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// закриття модального вікна
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// плавна прокрутка
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// зміна шапки при скролі
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});