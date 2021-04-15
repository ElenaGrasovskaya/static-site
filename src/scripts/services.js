import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

/** Name of the titles in slide pagination. */
const slideTitles = [
  'Research',
  'Design',
  'Development',
  'Testing',
  'Launch',
  'Support',
];

const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 100,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => /* html */ `
      <div class="${className}">
        <i>${index + 1}</i>
        <span>${slideTitles[index]}</span>
      </div>
    `,
  },
});
