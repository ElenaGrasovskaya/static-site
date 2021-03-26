module.exports = class {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      lang: 'en',
      title: 'Home Page - Halo Lab',
      layout: 'pwa',
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
    return /* html */ `Hello world.`;
  }
};
