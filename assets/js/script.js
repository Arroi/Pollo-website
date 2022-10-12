const myNav = document.querySelector('.navbar_links');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', ()=> {
    myNav.classList.toggle('active');
})