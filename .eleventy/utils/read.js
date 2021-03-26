const fs = require('fs/promises');

const { reachFromSource } = require('./reach');

/**
 * Read file from source directory.
 *
 * @param {ReadonlyArray<string>} parts - path parts to file
 * that starts from source directory.
 * @returns content of source file and absolute path to it.
 */
module.exports = async (...parts) => {
  const pathToSource = reachFromSource(...parts);

  return {
    source: await fs.readFile(pathToSource, { encoding: 'utf8' }),
    url: pathToSource,
  };
};
