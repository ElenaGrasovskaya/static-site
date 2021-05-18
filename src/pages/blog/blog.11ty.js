const header = require('../../components/header/header.11ty');
const footer = require('../../components/footer.11ty');

module.exports = class {
  data() {
    return {
      lang: 'en',
      title: 'Blog - Halo Lab',
      layout: 'base',
      styles: 'blog.scss',
      scripts: 'blog/blog.ts',
      keywords: 'Halo Lab',
      permalink: '/blog/index.html',
      description:
        'If you would like to find some useful articles about digital products ' +
        '- welcome to our blog page. Here we tell you about design and development,' +
        ' we share our case studies with you, and we talk about logos and branding.',
    };
  }

  async render() {
    return /* html */ `
      ${await header.call(this)}
        <main>
          <h1 class="big-title">Our blog</h1>
          <div class="blog-categories">
            <a class="category-link">all</a>
            <a class="category-link">#agency</a>
            <a class="category-link">#news</a>
            <a class="category-link">#cases</a>
          </div>
           
        </main>
      ${await footer.call(this)}
    `;
  }
};
