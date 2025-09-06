const dialog = document.querySelector('.dialog');
const showButton = document.querySelector('.hero-btn');
const closeButton = document.querySelector('.dialog-close');
const body = document.querySelector('body');

showButton.addEventListener('click', () => {
  dialog.showModal();
  body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  dialog.close();
  body.style.overflow = 'visible';
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    body.style.overflow = 'visible';
  }
});
