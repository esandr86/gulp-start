const productButton = document.querySelectorAll('.product__button');
const modalProduct = document.querySelector('.modal__product');
const modalProductClose = document.querySelector('.modal__close');
const modalContinueShopping = document.querySelector('.modal__button');

const modalClose = () => {
  modalProduct.classList.remove('modal__product--showed');
  modalProductClose.removeEventListener('click', modalClose);
};

const modalContinueButton = modalClose;

function openModal () {
  modalProduct.classList.add('modal__product--showed');
  modalProductClose.addEventListener('click', modalClose);
  modalContinueShopping.addEventListener('click', modalContinueButton);
}

productButton.forEach(function(productButton){
  productButton.addEventListener('click', openModal);
});
