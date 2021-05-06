const advantageBlock = require('../advantage_block');

module.exports = async function designBlock() {
  return /* html */ `
  <h2 class="big-title big-title-lh">Design with passion</h2>
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
  `;
};
