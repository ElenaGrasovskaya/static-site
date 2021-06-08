module.exports = async function flowBlock({ flowCarousel }) {
  return /* html */ `
      <h2 class="big-title">Our Flow</h2>
      
      <div class="section">
        <div class="pagination-wrapper flow-pagination-wrapper">
          ${flowCarousel
            .map(
              ({ title }, index) => /* html */ `
              <button data-index="${index + 1}" class="bullet flow-bullet ${
                index === 0 ? 'active' : ''
              }">
                <div class="flow-bullet__number">${index + 1}</div>
                <p class="bullet-text">${title}</p>
              </button>
          `,
            )
            .join('')}
        </div>
          
        <div class="swiper-container flow-carousel">
          <div class="swiper-wrapper">
            ${await Promise.all(
              flowCarousel.map(
                async ({ text, imageSource }) => /* html */ `
                <div class="swiper-slide slide flow-slide black-text">
                  <div class="flow-slide-thumb">${await this.image(imageSource)}</div>
                  ${text}
                </div>
               `,
              ),
            ).then((slides) => slides.join(''))}
          </div>
  
          <div class="navigation-wrapper">
            <button class="flow-prev-button">
              ${await this.image('svg/arrow-left.svg')}
            </button>
            <button class="flow-next-button">
              ${await this.image('svg/arrow-right.svg')}
            </button>
          </div>
        </div>
      </div>
  `;
};
