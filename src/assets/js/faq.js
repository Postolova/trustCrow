// eslint-disable-next-line no-unused-vars
const questionList = document.querySelector('.questions__list');
// eslint-disable-next-line no-unused-vars
const questionItem = document.querySelectorAll('.question__item');
// eslint-disable-next-line no-unused-vars
const hiddenText = document.querySelector('.answer');
// eslint-disable-next-line no-unused-vars
const btnClose = document.querySelector('.queston-btn__image');

/* for (let i = 0; i < questionItems.length; i++) {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-unused-vars
  const elem = questionItems[i];
  elem.addEventListener('click', function() {
    btnClose.classList.toggle('image-rotate');
  });
}
 */
// eslint-disable-next-line no-unused-expressions
questionList.addEventListener('click', e => {
  e.preventDefault();
  let target = e.target;
  if (target.className === 'question') {
    let answer = target.closest('answer');
    console.log(answer);
    if (answer.classList.contains('answer--active')) {
      answer.classList.toggle('answer--active');
    }
  }
});
