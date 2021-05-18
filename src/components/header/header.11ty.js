const menu = require('./components/menu');

module.exports = async function header() {
  const isContactsPage = this.page.url.includes('contacts');

  return /* html */ `
  <header class="main-header">
    <div class="top-line">
      <a href="/" class="logo-button">Halo Lab logotype ${await this.image(
        'svg/logo.svg',
      )}</a>
      <div class="right-column">
      ${
        isContactsPage
          ? ''
          : '<a href="/contacts" class="contact-button">Contact</a>'
      }
        <a class="contact-mail" href="mailto:mail@halo-lab.com">mail@halo-lab.com</a>
        <button class="menu-button" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    ${await menu.call(this)}
  </header>
  `;
};
