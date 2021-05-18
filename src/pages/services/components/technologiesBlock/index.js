const decomposeSlide = async function (icons) {
  return /* html */ `
  <div class="swiper-slide slide tech-slide">
    ${await Promise.all(
      icons.map(
        async ({ src, title }) => /* html */ `
          <a href="#" class="tech-item">
            ${await this.image(src)}
            ${title}
          </a>
        `,
      ),
    ).then((result) => result.join(''))}
  </div>`;
};

module.exports = async function technologiesBlock({ techCarousel }) {
  return /* html */ `
    <h2 class="big-title">Technologies</h2>

    <div class="section">
      <div class="pagination-wrapper tech-pagination-wrapper">
        ${techCarousel
          .map(
            ({ title }, index) => /* html */ `
              <button data-index="${index + 1}" class="tech-bullet bullet ${
              index === 0 ? 'active' : ''
            }">
                <span class="bullet-text">${title}</span>
              </button>`,
          )
          .join('')}
      </div>
     
      <div class="swiper-container tech-carousel">
        <div class="swiper-wrapper">
          ${await Promise.all(
            techCarousel.map(async ({ icons }) => decomposeSlide.call(this, icons)),
          ).then((result) => result.join(''))}
        </div>
      </div>
    </div>
  `;
};
