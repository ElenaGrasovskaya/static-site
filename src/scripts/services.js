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

const flowSwiper = new Swiper('.flow-carousel', {
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.flow-next-button',
    prevEl: '.flow-prev-button',
  },
  pagination: {
    el: '.flow-pagination-wrapper',
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

// const swiperTech = new Swiper('.swiper-container', {
//   loop: true,
//   centeredSlides: true,
//   pagination: {
//     el: '.swiper-pagination-tech',
//     type: 'bullets',
//     bulletActiveClass: 'active-tech',
//     clickable: true,
//     renderBullet: (index, className) => /* html */ `
//       <div class="${className}">
//         <p>${techSlideTitles[index]}</p>
//       </div>
//     `,
//   },
// });
