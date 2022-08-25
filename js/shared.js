const MENU_BUTTON = document.querySelector('#site-menu-toggle');
const MENU = document.querySelector('#site-menu');

MENU_BUTTON.addEventListener('click', ()=> {
  MENU_BUTTON.classList.toggle('open');
  MENU.classList.toggle('header-nav__container--open');
})