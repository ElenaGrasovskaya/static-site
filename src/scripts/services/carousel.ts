const activeClass = 'active';

export const deactivateBullets = (bullets: ReadonlyArray<HTMLButtonElement>): void =>
  bullets.forEach((bullet) => bullet.classList.remove(activeClass));

export const activate = (bullet: HTMLButtonElement): void =>
  bullet.classList.add(activeClass);

export const calculateOverflow = (
  container: HTMLElement,
  bullet: HTMLButtonElement,
): number => {
  const offset = bullet.offsetWidth + bullet.offsetLeft - container.offsetWidth;
  const positiveOffset = offset >= 0 ? offset : 0;
  return positiveOffset - container.scrollLeft;
};

export const calculateIndex = (activeIndex, itemsCount): number =>
  activeIndex > 0
    ? activeIndex - 1 >= itemsCount
      ? activeIndex - itemsCount - 1
      : activeIndex - 1
    : itemsCount - 1;
