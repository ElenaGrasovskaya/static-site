const contactUsBlock = () => /* html */ `
    <div class="bottom-section">
      <h2 class="big-title bottom-title">
        <span class="white-text">Ready to create</span>
        <br>
        your star?
      </h2>
      <p class="bottom-link-wrapper">
        <a href="/contacts" class="bottom-contact">Contact us</a>
      </p>
    </div>
`;

module.exports = async function footer() {
  const isContactsPage = this.page.url.includes('contacts');
  const isContactUsBlockVisible =
    this.page.url.includes('services') || /^\/$/.test(this.page.url);

  return /* html */ `
	<footer class="main-footer">
    ${isContactUsBlockVisible ? contactUsBlock() : ''}
    <div class="bottom-line">
      <div></div>
      <div class="socials">
      <a href="https://github.com/Halo-Lab" rel="noopener noreferrer">Link to GitHub ${await this.image(
        'svg/github.svg',
      )}</a>
      <a href="https://www.npmjs.com/~halolab" rel="noopener noreferrer">Link to npm ${await this.image(
        'svg/npm.svg',
      )}</a>
      <a href="https://www.instagram.com/halolabteam/" rel="noopener noreferrer">Link to Instagram ${await this.image(
        'svg/instagram.svg',
      )}</a>
      <a href="https://www.behance.net/halolab" rel="noopener noreferrer">Link to Behance ${await this.image(
        'svg/behance.svg',
      )}</a>
      <a href="https://dribbble.com/halolab" rel="noopener noreferrer">Link to Dribbble ${await this.image(
        'svg/dribbble.svg',
      )}</a>
    </div>
    ${
      isContactsPage
        ? '<div></div>'
        : '<p class="with-love-title">With Love from <b class="with-love-title-brand">Halo Lab</b></p>'
    }
    </div>
  </footer>
	`;
};
