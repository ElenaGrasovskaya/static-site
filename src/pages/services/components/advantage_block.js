const mailLink = require('../../../components/mail_link.11ty');
const buildAdvantageItem = require('./advantage_item');

module.exports = ({ quote, items, contactText }) => /* html */ `
  <div class="section advantage-block">
    <div class="advantage-block-item main">
      <h5 class="advantage-quote black-text">
        ${quote}
      </h5>
      ${contactText ? mailLink(contactText, { classes: 'contact-link' }) : ''}
    </div>
    ${items.map(buildAdvantageItem).join('')}
  </div>
`;
