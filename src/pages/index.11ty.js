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
        <div class = "dribbble-logo-animated-front">${await this.image('svg/dribbble-red.svg')}</div>
        </div>
      </a>
      <div class="recent-works-container">
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image('svg/image 28.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 27.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 29.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 30.svg')}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image('svg/image 28.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 27.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 29.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 30.svg')}</div>
        </div>
        <div class="recent-works-block">
          <div class = "recent-works-item">${await this.image('svg/image 28.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 27.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 29.svg')}</div>
          <div class = "recent-works-item">${await this.image('svg/image 30.svg')}</div>
        </div>
      </div>

      <h2 class="big-title"><span>Projects</span></h2>

      
      
    </main>
    `;
  }
};
