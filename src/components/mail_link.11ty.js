module.exports = (text, { classes = [] } = {}) => /* html */ `
  <a class="mail-link ${
    Array.isArray(classes) ? classes.join(' ') : classes
  }" href="mailto:mail@halo-lab.com" rel="noopener noreferrer">${text}</a>
  `;
