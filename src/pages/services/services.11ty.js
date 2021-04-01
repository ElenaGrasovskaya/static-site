const advantageBlock = require('./components/advantage_block');

const presentationLink = async function () {
  return /* html */ `<a href="#" download class="download-link">
  ${await this.image('polyhedron.png', { classes: 'presentation-image' })}
  <span>Download&nbsp;dev. presentation</span>
</a>`;
};

module.exports = class {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      lang: 'en',
      title: 'Services - Halo Lab',
      layout: 'pwa',
      styles: 'services.scss',
      scripts: 'services.js',
      keywords: 'Halo Lab',
      permalink: 'services.html',
      description:
        'We offer to get acquainted with tools that we use ' +
        'in our studio to create the wonders of the digital world.',
    };
  }

  async render() {
    return /* html */ `
      <main>
        <h2 class="big-title">Design with passion</h2>
        ${advantageBlock({
          quote:
            'We make the people and interface interaction more intensive and exiting.',
          contactText: 'need a designer?',
          items: [
            {
              icon: await this.image('svg/ux_ui.svg', { classes: 'advantage-icon' }),
              title: 'UX/UI Design',
              text:
                'We design the flow of a multi-screen app, interactions ' +
                'and animations, to make interface feel amazing.',
            },
            {
              icon: await this.image('svg/websites.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Websites Design',
              text:
                'We create comprehensive and sophisticated yet simple to ' +
                'use interfaces for your web app.',
            },
            {
              icon: await this.image('svg/mobile_apps.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Mobile Apps Design',
              text:
                'We create native mobile apps with a focus on natural ' +
                'gestures and interactions with the user.',
            },
            {
              icon: await this.image('svg/branding.svg', {
                classes: 'advantage-icon',
              }),
              title: 'Branding',
              text:
                "We don't just create logos, we help our partners " +
                'establish an all-encompassing brand experience. ',
            },
          ],
        })}

        <h2 class="big-title">Development for years</h2>
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
          additionalBlock: await presentationLink.call(this),
        })}

        <h2 class="big-title">Our Flow</h2>
      </main>
    `;
  }
};
