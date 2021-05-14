const header = document.querySelector<HTMLHeadingElement>('.main-header');
const menuButton = header.querySelector<HTMLButtonElement>('.menu-button');

const bodyNoScroll = 'no-scroll';
const menuOpenedClass = 'menu-opened';

menuButton.addEventListener('click', () => {
  header.classList.toggle(menuOpenedClass);
  document.body.classList.toggle(bodyNoScroll);
});
