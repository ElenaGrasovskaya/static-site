import Swiper, { Navigation, Pagination } from 'swiper';

import { query } from '../common';
import { bindSwiperInstanceWithPagination } from './carousel';

Swiper.use([Navigation, Pagination]);

const flowPaginationWrapper = query<HTMLDivElement>('.flow-pagination-wrapper');
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
