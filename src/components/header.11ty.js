module.exports = async function header(isContacts = false) {
  return /* html */ `
  <header class="main-header">
    <a href="/" class="logo-button">Halo Lab logotype ${await this.image(
      'svg/logo.svg',
    )}</a>
    <div class="right-column">
    ${
      isContacts ? '' : '<a href="/contacts.html" class="contact-button">Contact</a>'
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
