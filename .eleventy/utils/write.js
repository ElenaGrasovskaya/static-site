const fs = require('fs/promises');
const path = require('path');

const toPublicUrl = require('./to_public_url');
const makeDirectories = require('./mkdir');
const { reachFromBuild } = require('./reach');

/**
 * Write compiled content to output directory.
 * Returns public path of compiled content (under build directory).
 *
 * @param {string} content
 * @param {ReadonlyArray<string>} parts - path to content's file.
 */
module.exports = async (content, ...parts) => {
  const publicUrl = toPublicUrl(...parts);

  const outputFilePath = reachFromBuild(publicUrl);

  await makeDirectories(path.dirname(outputFilePath)).then(() =>
    fs.writeFile(outputFilePath, content),
  );

  return publicUrl;
};
