import Swiper, { Navigation, Pagination } from 'swiper';

import { query } from '../common';
import { bindSwiperInstanceWithPagination } from './carousel';

Swiper.use([Navigation, Pagination]);

const techPaginationWrapper = query<HTMLElement>('.tech-pagination-wrapper');
const techSwiper = new Swiper('.tech-carousel', {
  loop: true,
  centeredSlides: true,
});

bindSwiperInstanceWithPagination(techSwiper, techPaginationWrapper);
