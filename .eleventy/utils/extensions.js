/**
 * Correspondence between source extension and
 * output extension.
 */
const EXTENSIONS = {
  js: 'js',
  ts: 'js',
  css: 'css',
  scss: 'css',
  sass: 'css',
};

/**
 * Add output extension to _name_ based on source extension of file.
 * If there is not match between source and output extensions, then
 * source extension is used.
 *
 * @param {string} name
 * @param {string} sourceExtension
 */
const addExtensionTo = (name, sourceExtension) =>
  name + '.' + (EXTENSIONS[sourceExtension] || sourceExtension);

module.exports = {
  addExtensionTo,
};
