









var btnOpen = document.querySelector('.nav__mob-text');
var btnClose = document.querySelector('.nav__close-wrap');

var menu = document.querySelector('.nav__content');

btnOpen.addEventListener('click', function () {
    menu.classList.add('nav__content--open');
    btnClose.classList.add('nav__close-wrap--show');
});

btnClose.addEventListener('click', function () {
    menu.classList.remove('nav__content--open');
    btnClose.classList.remove('nav__close-wrap--show');
});









