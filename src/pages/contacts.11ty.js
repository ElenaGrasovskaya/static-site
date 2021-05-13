const header = require('../components/header.11ty');
const footer = require('../components/footer.11ty');
const mailLink = require('../components/mail_link.11ty');

module.exports = class {
  data() {
    return {
      lang: 'en',
      title: 'Contacts - Halo Lab',
      layout: 'base',
      styles: 'contacts.scss',
      scripts: 'contacts.js',
      keywords: 'Halo Lab',
      permalink: 'contacts/index.html',
      description:
        'If you want to create a product or you would like to discuss ' +
        "how it could be realized, you're exactly where you're supposed " +
        'to be to receive advice from experienced specialists.',
    };
  }

  async render() {
    return /* html */ `
      ${await header.call(this)}
			<main>
				<h1 class="big-title">Contact us</h1>
				<div class="info-section">
          <div class="left-column">
            <p class="black-text">Email us:</p>
            ${mailLink('mail@halo-lab.com', { classes: ['black-text'] })}
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
              <input minlength="2" pattern="\\w{2,}" placeholder=" " type="text" id="name-input" required name="name">
              <label for="name-input">Full Name</label>
            </div>
            <div class="input-wrapper company-input-wrapper">
              <input placeholder=" " minlength="2" pattern="\\w{2,}" type="text" id="company-input" name="company">
              <label for="company-input">Company</label>
            </div>
            <div class="input-wrapper email-input-wrapper">
              <input placeholder=" " type="email" id="email-input" required name="email">
              <label for="email-input">Email</label>
            </div>
					</fieldset>          

          <fieldset>
            <legend>SERVICES</legend>

            <input id="branding" hidden name="services" value="branding" type="checkbox" />
            <label for="branding">
              Logo/Branding
            </label>

            <input id="ui-ux" hidden name="services" value="ui-ux" type="checkbox" />
            <label for="ui-ux">
              UI/UX
            </label>

            <input id="web-design" hidden name="services" value="web-design" type="checkbox" />
            <label for="web-design">
              Web design
            </label>

            <input id="mobile-design" hidden name="services" value="mobile-design" type="checkbox" />
            <label for="mobile-design">
              Mobile app design
            </label>

            <input id="web-development" hidden name="services" value="web-development" type="checkbox" />
            <label for="web-development">
              Web development
            </label>
            
            <input id="mobile-development" hidden name="services" value="mobile-development" type="checkbox" />
            <label for="mobile-development">
              Mobile development
            </label>
          </fieldset>

					<fieldset class="message-section">
						<legend>MESSAGE</legend>

            <div class="input-wrapper message-wrapper">
              <textarea placeholder=" " id="contact-message-area" required name="message"></textarea>
              <label for="contact-message-area">
                What is your project about?
              </label>
              
              <div class="message-section-footer">
                <input 
                  hidden
                  multiple
                  type="file" 
                  id="file-input" 
                  accept=".png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                >
                <label for="file-input" class="attach-button">
                  ${await this.image('svg/attach.svg')}
                </label>
              </div>
            </div>
					</fieldset>

          <fieldset>
            <legend>How did you hear about us?</legend>

            <input id="dribbble-behance" hidden name="referrals" value="dribbble-behance" type="checkbox" />
            <label for="dribbble-behance">
              Dribbble/Behance
            </label>
            
            <input id="search" hidden name="referrals" value="search" type="checkbox" />
            <label for="search">
              Search engine
            </label>
            
            <input id="social-media" hidden name="referrals" value="social-media" type="checkbox" />
            <label for="social-media">
              Social media
            </label>
            
            <input id="recommended" hidden name="referrals" value="recommended" type="checkbox" />
            <label for="recommended">
              Recommended
            </label>
            
            <input id="directories" hidden name="referrals" value="directories" type="checkbox" />
            <label for="directories">
              Directories
            </label>
            
            <input id="publication" hidden name="referrals" value="publication" type="checkbox" />
            <label for="publication">
              Blog or publication
            </label>
            
            <input id="other" hidden name="referrals" value="other" type="checkbox" />
            <label for="other">
              Other
            </label>
          </fieldset>

        	<button class="send-message-button control-button" type="submit">
            <span>SUBMIT</span>
          </button>
				</form>
			</main>
      ${await footer.call(this)}
    `;
  }
};
