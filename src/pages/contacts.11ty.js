const mailLink = require('../components/mail_link.11ty');

module.exports = class {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      lang: 'en',
      title: 'Contacts - Halo Lab',
      layout: 'pwa',
      styles: 'contacts.scss',
      scripts: 'contacts.js',
      keywords: 'Halo Lab',
      // permalink: 'contacts.html',
      description:
        'If you want to create a product or you would like to discuss ' +
        "how it could be realized, you're exactly where you're supposed " +
        'to be to receive advice from experienced specialists.',
    };
  }

  async render() {
    return /* html */ `
			<main>
				<h1 class="big-title">Contacts</h1>
				<div class="info-section">
          <div class="left-column">
            <p class="black-text">Email us:</p>
            ${mailLink('mail@halo-lab.com')}
          </div>
          <p class="right-column">
            The team is open for your ideas, questions and needs. Our clients get the superior
            results when a short-term acquaintance turns into a long-term collaboration.
          </p>
        </div>

        <form class="contact-form">
					<fieldset>
						<legend>REQUEST A QUOTE</legend>
						
            <div class="input-wrapper name-input-wrapper">
              <input min="2" placeholder=" " type="text" id="name-input" required name="name">
              <label for="name-input">Full Name</label>
            </div>
            <div class="input-wrapper company-input-wrapper">
              <input placeholder=" " type="text" id="company-input" name="company">
              <label for="company-input">Company</label>
            </div>
            <div class="input-wrapper email-input-wrapper">
              <input placeholder=" " type="email" id="email-input" required name="email">
              <label for="email-input">Email</label>
            </div>
					</fieldset>          
					<fieldset class="message-section">
						<legend>MESSAGE</legend>

            <div class="input-wrapper message-wrapper">
              <textarea placeholder=" " id="contact-message-area" required name="message"></textarea>
              <label for="contact-message-area">
                What is your project about?
              </label>
              
              <div class="message-section-footer">
                <button class="attach-button">
                  <input 
                    hidden
                    multiple
                    type="file" 
                    id="file-input" 
                    accept=".png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  >
                  ${await this.image('svg/attach.svg')}
                </button>
              </div>
            </div>
					</fieldset>          
        	<button class="send-message-button rectangular-button" type="submit">SUBMIT</button>
				</form>
			</main>
    `;
  }
};
