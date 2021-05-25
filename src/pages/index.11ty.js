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
              ${await this.image('index/svg/upwork-icon.svg')}        
              <p class="grey-text">Awarded as Best Design & Creative</p>
            </div>
            <div class="advantage-section-item">
              ${await this.image('index/svg/dribbble-icon.svg')}   
              <p class="grey-text">We regularly hit Top-5 Trending Teams</p>
            </div>
          <div class="advantage-section-item">
              ${await this.image('index/svg/clutch-icon.svg')}   
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
          'index/svg/dribbble-red.svg',
        )}</div>
        </div>
      </a>
      <div class="recent-works-container">
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'index/png/image 28.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 27.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 29.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 30.png',
          )}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'index/png/image 28.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 27.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 29.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 30.png',
          )}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image(
            'index/png/image 28.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 27.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 29.png',
          )}</div>
          <div class = "recent-works-item">${await this.image(
            'index/png/image 30.png',
          )}</div>
        </div>
      </div>

      <h2 class="big-title"><span>Projects</span></h2>
      <div class="projects-section">
          <div class="projects-section-image">
          ${await this.image('index/jpg/project1.jpg')}
          <div class="logo-list"> ${await this.image(
            'index/svg/mashable.svg',
          )}  ${await this.image('index/svg/kickstarter.svg')}  ${await this.image(
      'index/svg/huffpost.svg',
    )}</div>
            
          </div>
            <div class="projects-section-text">
              <p class="thin-grey-text">UX, UI, Illustrations, Icons</p>
              <p class="black-text">Reinvented bedding cutting price for 50%</p>
              <p><a class="mail-link" href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website" rel="noopener noreferrer"><span>more info</span></a></p>
              <div class="portrait-container">  
                <div class="portrait">${await this.image('index/png/face1.png')}</div>
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
                <div class="portrait">${await this.image('index/png/face2.png')}</div>
                <div><span class="black-text">Pro and creative!</span><br>
                    <span class="thin-grey-text">Bogdan Suchyk, CEO</span>
                  </div>
              </div>


            </div>
            <div class="projects-section-image-reverse">
              ${await this.image('index/jpg/project2.jpg')}
              <div class="logo-list"> ${await this.image(
                'svg/forbes.svg',
              )}  ${await this.image('index/svg/techcrunch.svg')}  ${await this.image(
      'svg/vc.ru.svg',
    )} ${await this.image('svg/angellist.svg')}</div>
            
            </div>
      </div>
      <div class="projects-section">
          <div class="projects-section-image">
          ${await this.image('index/jpg/project3.jpg')}
          <div class="logo-list"> ${await this.image(
            'svg/forbes.svg',
          )}  ${await this.image('index/svg/techcrunch.svg')}  ${await this.image(
      'svg/mashable.svg',
    )} ${await this.image('index/svg/indiegogo.svg')}</div>
            
          </div>
            <div class="projects-section-text">
              <p class="thin-grey-text">Analytics, UX, UI, Front-end</p>
              <p class="black-text">Indiegogo superstar smart clock which ease your life</p>
              <p><a class="mail-link" href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website" rel="noopener noreferrer"><span>more info</span></a></p>
              <div class="portrait-container">
                <div class="portrait">${await this.image('index/png/face3.png')}</div>
                <div><span class="black-text">They know what to do!</span><br>
                    <span class="thin-grey-text">Anton Glance, CEO</span>
                  </div>
              </div>
            </div>
      </div>
      <div class="and-others-section">
            <p class="black-text">And others</p>

            <div class="and-others-section-item">${await this.image(
              'index/svg/auth0.svg',
            )}</div>
            <div class="and-others-section-item">${await this.image(
              'index/svg/udemy.svg',
            )}</div>
            <div class="and-others-section-item">${await this.image(
              'index/svg/kkl-luzern.svg',
            )}</div>
            <div class="and-others-section-item"><a href="/portfolio/">view all cases</a></div>
      </div>


      <section class="comments-swiper">
        <div class="comments-swiper-container"> 
          <button class="slider-button">
            <div class="prev" aria-label="Previous slide"></div>
            </button>
          <div class="swiper-slider">
              <div class="slider-raiting"><p class="black-text">4.8</p>${await this.image(
                'index/svg/stars-5.svg',
              )} ${await this.image('svg/clutch-title.svg')}
             </div>
              <div class="slider-text">${await this.image(
                'index/svg/quotes.svg',
              )}<h6>They perfectly met my expectations — 
                working with them felt like an extension of my in-house team.</h6>
                <p class="black-text">&#8212; Alexander Kozma Ingal, Room Six</p>
              </div>
            </div>
            <button class="slider-button">
                <div class="next" aria-label="Next slide"></div>
              </button>
        </div>
        <div class="swiper-pagination"><button class="swiper-pagination-bullet-active"></button>
        <button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button>
        <button class="swiper-pagination-bullet"></button></div>
      </section>
      <h2 class="big-title"><span>Creative Atmosphere</span></h2>
      <section class="carousel">
        <div class="carousel-item">${await this.image('index/png/carousel1.png')}</div>
        <div class="carousel-item">${await this.image('index/png/carousel2.png')}</div>
        <div class="carousel-item">${await this.image('index/png/carousel3.png')}</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

      </section>
      <section class="blog-section">
        <div class="blog-section-container">
          <div class="blog-section-container-left-column">
            <div class="blog-logo">${await this.image('index/svg/B.svg')}</div>
          <p>Front-end & back-end expertise from development to delivery</p>
          <a class="mail-link" href="https://www.halo-lab.com/blog"><span>MORE BLOG POSTS</span></a>
        
        </div>
          
          <div class="blog-section-container-right-column">
              <div class="blog-section-container-right-column-block">
              ${await this.image('index/png/check-site.png')}
                <p><span>#AGENCY</span><br>How to check the website before releasing it?</p>
                </div>
              <div class="blog-section-container-right-column-block">
              ${await this.image('index/png/red-planet.png')}
                <p><span>#NEWS</span><br>Halo Lab Named Top Ukranian B2B Company</p>
              </div>
              <div class="blog-section-container-right-column-block">
              ${await this.image('index/png/blue-planet.png')}
                <p><span>#AGENCY</span><br>Brand analysis: second step to the brand identity</p> 
              </div>
          </div>
          
        </div>
        <a class="mail-link" id="hide" href="https://www.halo-lab.com/blog"><span>MORE BLOG POSTS</span></a> 
        
      </section>
      
      
    </main>
    ${await footer.call(this)}
    `;
  }
};
