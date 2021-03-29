const { writeFile } = require('fs').promises;

const brotli = require('../utils/brotli');

/**
 * Accomplish brotli compression of HTML.
 *
 * @param {string} html
 * @param {string} outputPath
 */
module.exports = async (html, outputPath) => {
  await brotli(html, outputPath).then(({ data, url }) => writeFile(url, data));

  return html;
};
