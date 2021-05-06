const advantageBlock = require('../advantage_block');

async function presentationLink() {
  return /* html */ `<a href="#" download class="download-link">
  ${await this.image('polyhedron.png', { classes: 'presentation-image' })}
  <span>Download&nbsp;dev. presentation</span>
</a>`;
}

module.exports = async function developerBlock() {
  return /* html */ `
    <h2 class="big-title big-title-lh">Development for years</h2>
        ${advantageBlock({
          quote: 'Front-end & back-end expertise from development to delivery',
          contactText: 'need a developer?',
          items: [
            {
              icon: await this.image('svg/front_end.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Front-end Development',
              text: 'We provide back-end and front-end development to your needs.',
            },
            {
              icon: await this.image('svg/hybrid_apps.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Hybrid Apps Development',
              text:
                'Practical solutions for iOS and Android platforms with a focus on performance.',
            },
            {
              icon: await this.image('svg/back_end.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Back-End  Development',
              text:
                'Quality-driven web development according to the latest technology standards.',
            },
            {
              icon: await this.image('svg/assurance.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Quality Assurance',
              text:
                'Effective solutions for iOS and Android platforms with focus on performance.',
            },
          ],
          // additionalBlock: await presentationLink.call(this),
        })}
  `;
};
