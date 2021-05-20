const header = require('../components/header/header.11ty');
const footer = require('../components/footer.11ty');

module.exports = class {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      lang: 'en',
      title: 'Home Page - Halo Lab',
      layout: 'base',
      styles: 'index.scss',
      scripts: 'index.js',
      keywords: 'Halo Lab',
      permalink: 'index.html',
      description:
        'Halo Lab Team brings the design-driven development of your digital ' +
        'product to reality. We are working with a variety of projects, from ' +
        'the strict insurance website to a dynamic music application.',
    };
  }

  async render() {
    return /* html */ `
    ${await header.call(this)}
    <main>
      <h1 class="big-title">Design-driven<br><span>development of<br>your</span> web products<br><span>for years<span></h1>
      <div class="advantage-section">
          <div class="advantage-section-item">
              ${await this.image('svg/upwork-icon.svg')}        
              <p class="grey-text">Awarded as Best Design & Creative</p>
            </div>
            <div class="advantage-section-item">
              ${await this.image('svg/dribbble-icon.svg')}   
              <p class="grey-text">We regularly hit Top-5 Trending Teams</p>
            </div>
          <div class="advantage-section-item">
              ${await this.image('svg/clutch-icon.svg')}   
            <p class="grey-text">Top User Experience Agency</p>
          </div>
      </div>
      <div class="aim-section">
          <div class="aim-section-item">
            <p class="black-text">Driving your business forward with strong products</p>
            
          </div>
            <div class="aim-section-item">
              <p><span>We are a full-service digital agency that builds immersive user experience.
                  Our team creates an exceptional visualization and thought-out functionality.
                  We believe, our clients deserve to be remarkable in their business.
                  The studio develops the products people appreciate all around the world.</span></p>
            </div>
      </div>
      <h2 class="big-title"><span>Recent Works</span></h2>
      <a  class= "dribbble-link-animated" href="https://www.dribbble.com/halolab" rel="noopener noreferrer">
        <div class = "dribbble-logo-animated-back">
        <div class = "dribbble-logo-animated-front">${await this.image(
          'svg/dribbble-red.svg',
        )}</div>
        </div>
      </a>
      <div class="recent-works-container">
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'svg/image 28.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 27.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 29.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 30.svg',
          )}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'svg/image 28.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 27.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 29.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 30.svg',
          )}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'svg/image 28.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 27.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 29.svg',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'svg/image 30.svg',
          )}</div>
        </div>
      </div>

      <h2 class="big-title"><span>Projects</span></h2>
      <div class="projects-section">
          <div class="projects-section-image">
          ${await this.image('svg/project1.svg')}
          <div class="logo-list"> ${await this.image(
            'svg/mashable.svg',
          )}  ${await this.image('svg/kickstarter.svg')}  ${await this.image(
      'svg/huffpost.svg',
    )}</div>
            
          </div>
            <div class="projects-section-text">
              <p class="thin-grey-text">UX, UI, Illustrations, Icons</p>
              <p class="black-text">Reinvented bedding cutting price for 50%</p>
              <p><a class="mail-link" href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website" rel="noopener noreferrer"><span>more info</span></a></p>
              <div class="portrait-container">  
                <div class="portrait">${await this.image('svg/face1.svg')}</div>
                <div><span class="black-text">Unwavering expertise!</span><br>
                    <span class="thin-grey-text">Marshall Haas, CEO</span>
                  </div>
              </div>
            </div>
      </div>
      <div class="projects-section-reverse">
          
            <div class="projects-section-text-reverse">
              <p class="thin-grey-text">Analytics, UX, UI, Icons, Front-end</p>
              <p class="black-text">Game Analytics wins TechCrunch Disrupt & Raise $2.6M</p>
              <p><a class="mail-link" href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website" rel="noopener noreferrer"><span>more info</span></a></p>
              <div class="portrait-container">
                <div class="portrait">${await this.image('svg/face2.svg')}</div>
                <div><span class="black-text">Pro and creative!</span><br>
                    <span class="thin-grey-text">Bogdan Suchyk, CEO</span>
                  </div>
              </div>


            </div>
            <div class="projects-section-image-reverse">
              ${await this.image('svg/project2.svg')}
              <div class="logo-list"> ${await this.image(
                'svg/forbes.svg',
              )}  ${await this.image('svg/techcrunch.svg')}  ${await this.image(
      'svg/vc.ru.svg',
    )} ${await this.image('svg/angellist.svg')}</div>
            
            </div>
      </div>
      <div class="projects-section">
          <div class="projects-section-image">
          ${await this.image('svg/project3.svg')}
          <div class="logo-list"> ${await this.image(
            'svg/forbes.svg',
          )}  ${await this.image('svg/techcrunch.svg')}  ${await this.image(
      'svg/mashable.svg',
    )} ${await this.image('svg/indiegogo.svg')}</div>
            
          </div>
            <div class="projects-section-text">
              <p class="thin-grey-text">Analytics, UX, UI, Front-end</p>
              <p class="black-text">Indiegogo superstar smart clock which ease your life</p>
              <p><a class="mail-link" href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website" rel="noopener noreferrer"><span>more info</span></a></p>
              <div class="portrait-container">
                <div class="portrait">${await this.image('svg/face3.svg')}</div>
                <div><span class="black-text">They know what to do!</span><br>
                    <span class="thin-grey-text">Anton Glance, CEO</span>
                  </div>
              </div>
            </div>
      </div>
      <div class="and-others-section">
            <p class="black-text">And others</p>

            <div class="and-others-section-item">${await this.image(
              'svg/auth0.svg',
            )}</div>
            <div class="and-others-section-item">${await this.image(
              'svg/udemy.svg',
            )}</div>
            <div class="and-others-section-item">${await this.image(
              'svg/kkl-luzern.svg',
            )}</div>
            <div class="and-others-section-item"><a href="/portfolio/">view all cases</a></div>
      </div>


      <section class="comments-swiper">
        <div class="comments-swiper-container"> 
          <div class="slider-button">
            <button class="prev" aria-label="Previous slide"></div>
            </div>
          <div class="swiper-slider">
              <div class="slider-raiting"><p class="black-text">4.8</p>${await this.image(
                'svg/stars-5.svg',
              )} ${await this.image('svg/clutch-title.svg')}
             </div>
              <div class="slider-text">${await this.image(
                'svg/quotes.svg',
              )}<h6>They perfectly met my expectations — 
                working with them felt like an extension of my in-house team.</h6>
                <p class="black-text">&#8212;Alexander Kozma Ingal, Room Six</p>
              </div>
            </div>
            <div class="slider-button">
                <button class="next" aria-label="Next slide"></div>
          </div>
        </div>
        <div class="swiper-pagination"><button class="swiper-pagination-bullet"></button>
        <<button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button></div>
      </section>

      
      
    </main>
    ${await footer.call(this)}
    `;
  }
};
