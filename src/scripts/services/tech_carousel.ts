import Swiper, { Navigation, Pagination } from 'swiper';

import {
  activate,
  calculateIndex,
  calculateOverflow,
  deactivateBullets,
} from './carousel';

Swiper.use([Navigation, Pagination]);

const techPaginationWrapper = document.querySelector<HTMLElement>(
  '.tech-pagination-wrapper',
);
const techPaginationBullets = Array.from<HTMLButtonElement>(
  techPaginationWrapper.querySelectorAll('.tech-bullet'),
);

const techSwiper = new Swiper('.tech-carousel', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loopedSlides: 1,
});

techSwiper.on('activeIndexChange', (swiper) => {
  const bullet =
    techPaginationBullets[
      calculateIndex(swiper.activeIndex, techPaginationBullets.length)
    ];

  deactivateBullets(techPaginationBullets);
  activate(bullet);
  techPaginationWrapper.scrollBy({
    left: calculateOverflow(techPaginationWrapper, bullet),
    behavior: 'smooth',
  });
});

techPaginationBullets.forEach((bullet) => {
  bullet.addEventListener('click', () => {
    deactivateBullets(techPaginationBullets);
    activate(bullet);
    techSwiper.slideTo(parseInt(bullet.dataset.index));
    techPaginationWrapper.scrollBy({
      left: calculateOverflow(techPaginationWrapper, bullet),
      behavior: 'smooth',
    });
  });
});
