import { query, queryAll } from '../common';

const header = query<HTMLHeadingElement>('.main-header');
const menuButton = query<HTMLButtonElement>('.menu-button', header);
const menuLinks = queryAll<HTMLAnchorElement>('.menu-link', header);

const bodyNoScroll = 'no-scroll';
const menuLinkActive = 'active';
const menuOpenedClass = 'menu-opened';

menuButton.addEventListener('click', () => {
  header.classList.toggle(menuOpenedClass);
  document.body.classList.toggle(bodyNoScroll);
});

menuLinks
  .filter((link) => window.location.pathname.includes(link.dataset.icon))
  .forEach((link) => link.classList.add(menuLinkActive));
