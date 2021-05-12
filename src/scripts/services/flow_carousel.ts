import Swiper, { Navigation, Pagination } from 'swiper';

import { bindSwiperInstanceWithPagination } from './carousel';

Swiper.use([Navigation, Pagination]);

const flowPaginationWrapper = document.querySelector<HTMLDivElement>(
  '.flow-pagination-wrapper',
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

bindSwiperInstanceWithPagination(flowSwiper, flowPaginationWrapper);
