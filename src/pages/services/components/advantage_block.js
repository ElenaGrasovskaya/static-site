const mailLink = require('../../../components/mail_link.11ty');
const buildAdvantageItem = require('./advantage_item');

module.exports = ({
  quote,
  items,
  contactText,
  additionalBlock = '',
}) => /* html */ `
  <div class="section advantage-block">
    <div class="advantage-block-item-main">
      <h5 class="advantage-quote black-text">
        ${quote}
      </h5>
      ${mailLink(contactText, { classes: 'contact-link' })}
      ${additionalBlock}
    </div>
    <div class="advantage-blocks">
      ${items.map(buildAdvantageItem).join('')}
    </div>
  </div>
`;
