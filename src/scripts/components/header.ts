import { query } from '../common';

const header = query<HTMLHeadingElement>('.main-header');
const menuButton = query<HTMLButtonElement>('.menu-button', header);

const bodyNoScroll = 'no-scroll';
const menuOpenedClass = 'menu-opened';

menuButton.addEventListener('click', () => {
  header.classList.toggle(menuOpenedClass);
  document.body.classList.toggle(bodyNoScroll);
});
