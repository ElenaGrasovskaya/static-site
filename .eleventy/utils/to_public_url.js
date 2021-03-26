const path = require('path');

const pathStats = require('./path_stats');
const { addExtensionTo } = require('./extensions');

/**
 * Build public path of file based on its source path.
 * It is also build path of transformed file.
 *
 * @param {ReadonlyArray<string>} parts
 */
module.exports = (...parts) => {
  const { directory, name, extension } = pathStats(path.join(...parts));

  return path.join(directory, addExtensionTo(name, extension));
};
