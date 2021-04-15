const flowBlock = require('./components/flowBlock');
const designBlock = require('./components/designBlock');
const developerBlock = require('./components/developerBlock');

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
        ${await designBlock.call(this)}
        ${await developerBlock.call(this)}
        ${await flowBlock.call(this)}
      </main>
    `;
  }
};
