const headerOpenMenu = document.querySelector('.header__menu')
const headerContainer = document.querySelector('.header__container')
const hederCloseMenu = document.querySelector('.header__close')
const overlay = document.querySelector('.overlay');

headerOpenMenu.addEventListener('click', () => {
  headerContainer.classList.add('header__container--showed');
  overlay.classList.add('overlay--showed');
  hederCloseMenu.addEventListener('click', headerCloseButton);
  overlay.addEventListener('click', headerCloseButton);
});

const headerCloseButton = () => {
  headerContainer.classList.remove('header__container--showed');
  overlay.classList.remove('overlay--showed');
  hederCloseMenu.removeEventListener('click', headerCloseButton);
  overlay.removeEventListener('click', headerCloseButton);
};
