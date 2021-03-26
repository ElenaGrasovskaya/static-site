const zlib = require('zlib');

/**
 * Compress _content_ using `brotli` algorithm.
 *
 * @param {string} content
 * @param {string} outputPath
 * @returns compressed content and url of it.
 * Data is now written to disk.
 */
module.exports = async (content, outputPath) =>
  new Promise((resolve, reject) =>
    zlib.brotliCompress(
      content,
      {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
        },
      },
      (error, compressed) => (error ? reject(error) : resolve(compressed)),
    ),
  ).then((data) => ({ data, url: outputPath + '.br' }));
