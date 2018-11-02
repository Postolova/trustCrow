const questionItems = document.querySelectorAll('.question__item');
// eslint-disable-next-line no-unused-vars
const hiddenText = document.querySelector('.answer');
// eslint-disable-next-line no-unused-vars
const btnClose = document.querySelector('.queston-btn__image');

for (let i = 0; i < questionItems.length; i++) {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-unused-vars
  const elem = questionItems[i];
  elem.addEventListener('click', function() {
    btnClose.classList.toggle('image-rotate');
  });
}

/* questionItem.addEventListener('click', function() {
  // eslint-disable-next-line eqeqeq
  btnClose.classList.toggle('image-rotate');
});
 */
