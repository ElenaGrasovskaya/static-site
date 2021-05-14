const header = require('../../components/header/header.11ty');
const footer = require('../../components/footer.11ty');
const flowBlock = require('./components/flowBlock');
const designBlock = require('./components/designBlock');
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
      scripts: 'services/index.ts',
      keywords: 'Halo Lab',
      permalink: 'services/index.html',
      description:
        'We offer to get acquainted with tools that we use ' +
        'in our studio to create the wonders of the digital world.',
    };
  }

  async render(data) {
    return /* html */ `
      ${await header.call(this)}
      <main class="footer-colored">
        ${await designBlock.call(this)}
        ${await developerBlock.call(this)}
        ${await flowBlock.call(this, data)}
        ${await technologiesBlock.call(this, data)}
      </main>
      ${await footer.call(this)}
    `;
  }
};
