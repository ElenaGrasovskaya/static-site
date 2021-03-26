const path = require('path');

const pwaAssetGenerator = require('pwa-asset-generator');

const read = require('../utils/read');
const write = require('../utils/write');
const makeDirectories = require('../utils/mkdir');
const { done, oops, start } = require('../utils/pretty');
const { reachFromSource, reachFromBuild } = require('../utils/reach');
const {
  FAVICON_FILE,
  MANIFEST_FILE,
  HEAD_CLOSED_TAG,
  ASSETS_DIRECTORY,
  IMAGES_DIRECTORY,
  FAVICONS_DIRECTORY,
} = require('../constants');

const PLUGIN_NAME = 'PWA icons';

/**
 * Update _icons_ property of manifest file.
 *
 * @param {ReadonlyArray<object>} icons
 */
const updateManifest = async (icons) => {
  return read(MANIFEST_FILE)
    .then(({ source }) => JSON.parse(source))
    .then((manifest) => ({
      ...manifest,
      icons: (manifest.icons || []).concat(icons),
    }))
    .then(JSON.stringify)
    .then((data) => write(data, MANIFEST_FILE));
};

/**
 * Builds link tag of manifest file to be
 * inserted into HTML.
 *
 * @param {string} url
 */
const buildManifestLinkTag = (url) =>
  /* html */ `<link rel="manifest" href="${url}" crossorigin="use-credentials" />`;

/**
 * @typedef {{
 * 	fileName?: string, // Name of favicon file.
 * 	inputDirectory?: string, // Path to favicon file in source directory
 *  outputDirectory?: string, // Path to generated images in build directory, also it is used as public URL to images.
 * }} GenerateImageOptions - options that can be passed for customizing
 * _generateImages_ function behavior.
 */

/**
 * Generate icon and splash screen images,
 * favicons and mstile images.
 *
 * @param {GenerateImageOptions} [options]
 */
const generateImages = async ({
  fileName = FAVICON_FILE,
  inputDirectory = path.join(ASSETS_DIRECTORY, IMAGES_DIRECTORY),
  outputDirectory = path.join(IMAGES_DIRECTORY, FAVICONS_DIRECTORY),
} = {}) => {
  const absoluteOutputDirectory = reachFromBuild(outputDirectory);

  await makeDirectories(absoluteOutputDirectory);

  const { htmlMeta, manifestJsonContent } = await pwaAssetGenerator.generateImages(
    reachFromSource(inputDirectory, fileName),
    absoluteOutputDirectory,
    {
      log: false,
      mstile: true,
      favicon: true,
      pathOverride: outputDirectory,
    },
  );

  return { html: Object.values(htmlMeta).join(''), manifestJsonContent };
};

/**
 * Holds generated contents to be inserted into HTML
 * and manifest.json.
 */
let cache = null;
/**
 * Holds public url of manifest file.
 *
 * Also tells if manifest's `icons` property is already
 * updated with generated images.
 */
let manifestPublicUrl = null;

/**
 * Transform function that inserts links of PWA images
 * into HTML file and updates manifest file.
 *
 * @param {string} html
 * @param {GenerateImageOptions} [options]
 */
module.exports = async (html, options = {}) => {
  start(PLUGIN_NAME, 'Starting icons generation');

  if (cache === null) {
    await generateImages(options).then(
      (info) => {
        done(PLUGIN_NAME, 'Icons for PWA were successfully generated');
        cache = info;
      },
      (error) => oops(PLUGIN_NAME, error),
    );
  }

  if (manifestPublicUrl === null) {
    await updateManifest(cache.manifestJsonContent).then(
      (url) => {
        done(
          PLUGIN_NAME,
          'Icons property of manifest.json was successfully updated',
        );
        manifestPublicUrl = url;
      },
      (error) => oops(PLUGIN_NAME, error),
    );
  }

  const htmlWithIcons = html
    .replace(
      HEAD_CLOSED_TAG,
      buildManifestLinkTag(manifestPublicUrl) + HEAD_CLOSED_TAG,
    )
    .replace(HEAD_CLOSED_TAG, cache.html + HEAD_CLOSED_TAG);

  done(PLUGIN_NAME, 'Links of generated icons were injected into HTML');

  return htmlWithIcons;
};
