const path = require('path');

/**
 * @typedef {{
 *  name: string,
 *  extension: string,
 *  directory: string
 * }} PathStats
 */

/**
 * Get info about path.
 * If path points to file, then _extension_ property will contain
 * extension of file, _name_ - name of the file and _directory_ -
 * directory path to file.
 * If link argument points to directory, then _extension_ and
 * _name_ properties will be empty strings.
 *
 * @param {string} link - path to be evaluated.
 * @returns {PathStats}
 */
module.exports = (link) => ({
  name: path.basename(link, path.extname(link)),
  extension: path.extname(link).slice(1),
  directory: path.dirname(link),
});
