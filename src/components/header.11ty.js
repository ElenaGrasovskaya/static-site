module.exports = async function header() {
  const isContactsPage = this.page.url.includes('contacts');

  return /* html */ `
  <header class="main-header">
    <a href="/" class="logo-button">Halo Lab logotype ${await this.image(
      'svg/logo.svg',
    )}</a>
    <div class="right-column">
    ${
      isContactsPage
        ? ''
        : '<a href="/contacts" class="contact-button">Contact</a>'
    }
      <button class="menu-button" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  `;
};
