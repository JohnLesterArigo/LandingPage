const hamburger = document.getElementById('hamburgerBtn');
const nav = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});
