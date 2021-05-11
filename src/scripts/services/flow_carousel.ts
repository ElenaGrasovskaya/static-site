import Swiper, { Navigation, Pagination } from 'swiper';

import {
  activate,
  calculateIndex,
  calculateOverflow,
  deactivateBullets,
} from './carousel';

Swiper.use([Navigation, Pagination]);

const flowPaginationWrapper = document.querySelector<HTMLDivElement>(
  '.flow-pagination-wrapper',
);
const flowPaginationBullets = Array.from<HTMLButtonElement>(
  flowPaginationWrapper.querySelectorAll('.flow-bullet'),
);

const flowSwiper = new Swiper('.flow-carousel', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loopedSlides: 1,
  navigation: {
    nextEl: '.flow-next-button',
    prevEl: '.flow-prev-button',
  },
});

flowSwiper.on('activeIndexChange', (swiper) => {
  const bullet =
    flowPaginationBullets[
      calculateIndex(swiper.activeIndex, flowPaginationBullets.length)
    ];

  deactivateBullets(flowPaginationBullets);
  activate(bullet);
  flowPaginationWrapper.scrollBy({
    left: calculateOverflow(flowPaginationWrapper, bullet),
    behavior: 'smooth',
  });
});

flowPaginationBullets.forEach((bullet) => {
  bullet.addEventListener('click', () => {
    deactivateBullets(flowPaginationBullets);
    activate(bullet);
    flowSwiper.slideTo(parseInt(bullet.dataset.index));
    flowPaginationWrapper.scrollBy({
      left: calculateOverflow(flowPaginationWrapper, bullet),
      behavior: 'smooth',
    });
  });
});
