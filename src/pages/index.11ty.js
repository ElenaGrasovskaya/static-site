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
    </main>
    `;
  }

 
  

};
