import Swiper from 'swiper';

const activeClass = 'active';

const deactivateBullets = (bullets: ReadonlyArray<HTMLButtonElement>): void =>
  bullets.forEach((bullet) => bullet.classList.remove(activeClass));

const activate = (bullet: HTMLButtonElement): void =>
  bullet.classList.add(activeClass);

const calculateOverflow = (
  container: HTMLElement,
  bullet: HTMLButtonElement,
): number => {
  const offset = bullet.offsetWidth + bullet.offsetLeft - container.offsetWidth;
  const positiveOffset = offset >= 0 ? offset : 0;
  return positiveOffset - container.scrollLeft;
};

const calculateIndex = (activeIndex, itemsCount): number =>
  activeIndex > 0
    ? activeIndex - 1 >= itemsCount
      ? activeIndex - itemsCount - 1
      : activeIndex - 1
    : itemsCount - 1;

export const bindSwiperInstanceWithPagination = (
  swiper: Swiper,
  paginationWrapper: HTMLElement,
) => {
  const bullets = Array.from(
    paginationWrapper.querySelectorAll<HTMLButtonElement>('.bullet'),
  );

  swiper.on('activeIndexChange', (swiper) => {
    const bullet = bullets[calculateIndex(swiper.activeIndex, bullets.length)];

    deactivateBullets(bullets);
    activate(bullet);
    paginationWrapper.scrollBy({
      left: calculateOverflow(paginationWrapper, bullet),
      behavior: 'smooth',
    });
  });

  bullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
      deactivateBullets(bullets);
      activate(bullet);
      swiper.slideTo(parseInt(bullet.dataset.index));
      paginationWrapper.scrollBy({
        left: calculateOverflow(paginationWrapper, bullet),
        behavior: 'smooth',
      });
    });
  });
};
