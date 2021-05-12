import Swiper, { Navigation, Pagination } from 'swiper';

import { bindSwiperInstanceWithPagination } from './carousel';

Swiper.use([Navigation, Pagination]);

const techPaginationWrapper = document.querySelector<HTMLElement>(
  '.tech-pagination-wrapper',
);

const techSwiper = new Swiper('.tech-carousel', {
  loop: true,
  centeredSlides: true,
});

bindSwiperInstanceWithPagination(techSwiper, techPaginationWrapper);
