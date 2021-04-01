module.exports = ({ icon, title, text }) => /* html */ `
  <div class="advantage-block-item">
    ${icon}
    <h6 class="advantage-item-title">${title}</h6>
    <p class="advantage-text">
      ${text}
    </p>
  </div>
`;
