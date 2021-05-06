const flowBlock = require('./components/flowBlock');
const designBlock = require('./components/designBlock');
const bottomBlock = require('./bottomBlock');
const developerBlock = require('./components/developerBlock');
const technologiesBlock = require('./components/technologiesBlock');

module.exports = class {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      lang: 'en',
      title: 'Services - Halo Lab',
      layout: 'base',
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
      <main class="footer-colored">
        ${await designBlock.call(this)}
        ${await developerBlock.call(this)}
        ${await flowBlock.call(this)}
        ${await technologiesBlock.call(this)}
      </main>
    `;
  }
};
