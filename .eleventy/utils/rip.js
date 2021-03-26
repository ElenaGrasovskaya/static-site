/**
 * Extract information from text based on pattern.
 * Pattern must have only one capturing group, that
 * describes needed information.
 *
 * @param {string} text
 * @param {RegExp} pattern
 */
module.exports = (text, pattern) => {
  const links = [];

  let match = null;
  while ((match = pattern.exec(text)) !== null) {
    links.push(match[1]);
  }

  return links;
};
