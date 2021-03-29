const path = require('path');
const { readFile } = require('fs').promises;

const Image = require('@11ty/eleventy-img');
const { optimize, extendDefaultPlugins } = require('svgo');

const read = require('./read');
const write = require('./write');
const pathStats = require('./path_stats');
const makeDirectories = require('./mkdir');
const { isSVG, getImageFormatsFrom } = require('./formats');
const { reachFromSource, reachFromBuild } = require('./reach');
const { IMAGES_DIRECTORY, ASSETS_DIRECTORY } = require('../constants');

/**
 * @typedef {{
 *  url: string, // Absolute path to image
 *  data: Promise<Buffer>, // Optimized image
 *  isSVG: boolean, // Tells if image is SVG
 *  options: Object, // Options to pass in eleventy-img package
 *  metadata: Object, // Image's metadata,
 * }} ImageMetadata
 */

/**
 * Build options for raster image optimizer based on stats.
 *
 * @param {import('./path_stats').PathStats} stats
 */
const getDefaultRasterOptimizerOptions = ({ name, directory, extension }) => ({
  widths: [null],
  formats: getImageFormatsFrom(extension),
  outputDir: reachFromBuild(IMAGES_DIRECTORY),
  urlPath: `/${IMAGES_DIRECTORY}/`,
  sharpPngOptions: {
    quality: 100,
    progressive: true,
  },
  sharpJpegOptions: {
    quality: 100,
    progressive: true,
  },
  sharpWebpOptions: {
    quality: 100,
    // Use near_lossless compression mode.
    nearLossLess: true,
  },
  sharpAvifOptions: {
    quality: 100,
  },
  filenameFormat: () => path.join(directory, `${name}.${extension}`),
});

/**
 * Optimize SVG handler.
 *
 * @param {string} url
 * @param {ReadonlyArray<string>} [classNames]
 */
const optimizeSVG = (url, classNames = []) =>
  read(ASSETS_DIRECTORY, IMAGES_DIRECTORY, url)
    .then(({ url, source }) =>
      optimize(source, {
        path: url,
        plugins: extendDefaultPlugins([
          {
            name: 'addClassesToSVGElement',
            active: classNames.length > 0,
            params: {
              classNames,
            },
          },
          // Preserve view-box attribute on <svg> for proper resizing of SVG
          // through CSS.
          {
            name: 'removeViewBox',
            active: false,
          },
          // Remove width and height attributes from <svg>
          {
            name: 'removeDimensions',
            active: true,
          },
          // Add name of SVG to id for create unique IDs if many SVGs will be present in page
          {
            name: 'prefixIds',
            active: true,
          },
        ]),
      }),
    )
    .then(({ data }) => write(data, IMAGES_DIRECTORY, url));

/**
 * Gets metadata about image. This function defines options for sharp
 * package for generating optimized images.
 *
 * @param {string} url - path to image in source's images directory
 * @param {ReadonlyArray<string>} [classNames] - classes to be added to SVG.
 * @returns {ImageMetadata}
 */
module.exports = (url, classNames = []) => {
  const inputPath = reachFromSource(ASSETS_DIRECTORY, IMAGES_DIRECTORY, url);
  const outputPath = reachFromBuild(IMAGES_DIRECTORY, url);

  const options = getDefaultRasterOptimizerOptions(pathStats(url));

  const optimizedImage = makeDirectories(path.dirname(outputPath))
    .then(() =>
      // Though Image function can accept SVGs, but it does not optimize them.
      // So, we need to filter SVG and handle them separately.
      isSVG(url) ? optimizeSVG(url, classNames) : Image(inputPath, options),
    )
    .then(() => readFile(outputPath));

  return {
    url: inputPath,
    data: optimizedImage,
    isSVG: isSVG(url),
    options,
    metadata: Image.statsSync(inputPath, options),
  };
};
