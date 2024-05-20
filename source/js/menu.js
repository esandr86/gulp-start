const headerOpenMenu = document.querySelector('.header__menu')
const headerContainer = document.querySelector('.header__container')
const hederCloseMenu = document.querySelector('.header__close')

headerOpenMenu.addEventListener('click', () => {
  headerContainer.classList.add('header__container--showed');
  hederCloseMenu.addEventListener('click', headerCloseButton);
});

const headerCloseButton = () => {
  headerContainer.classList.remove('header__container--showed');
  hederCloseMenu.removeEventListener('click', headerCloseButton);
};
