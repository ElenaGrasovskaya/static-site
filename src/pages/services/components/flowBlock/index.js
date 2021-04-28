module.exports = async function flowBlock() {
  return /* html */ `
    <h2 class="big-title big-title-lh">Our Flow</h2>
    
    <div class="slider-wrapper-flow">
      <div class="swiper-pagination-flow"></div>

      <div class="swiper-container">
        <div class="swiper-wrapper swiper-wrapper">
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-1.svg')}
              The starting point of any project is research. Its main three aspects are user flow, target audience and niche segment of the product.
            </div>
          </div>
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-2.svg')}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-3.svg')}
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
              for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
              et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
              by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-4.svg')}
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
              for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
              et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
              by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-5.svg')}
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
              for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
              et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
              by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
          <div class="swiper-slide slide">
            <div class="swiper-slide-overlay">
              ${await this.image('svg/flow-6.svg')}  
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
              for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
              et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
              by English versions from the 1914 translation by H. Rackham.
            </div>
          </div>
        </div>
        <div class="navigation-wrapper">
          <div class="swiper-button-prev navigation-button"></div>
          <div class="swiper-button-next navigation-button"></div>
        </div>
      </div>
    </div>
  `;
};
