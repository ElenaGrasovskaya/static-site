import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

console.log(document.documentElement.clientWidth);

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
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-flow',
    clickable: true,
    renderBullet: (index, className) => /* html */ `
      <div class="${className}">
        <p>${index + 1}</p>
        <span>${slideTitles[index]}</span>
      </div>
    `,
  },
});

const techSlideTitles = ['Front-end', 'Back-end', 'Databases', 'CMS'];

const swiperTech = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-tech',
    type: 'bullets',
    bulletActiveClass: 'active-tech',
    clickable: true,
    renderBullet: (index, className) => /* html */ `
      <div class="${className}">
        <p>${techSlideTitles[index]}</p>
      </div>
    `,
  },
});
