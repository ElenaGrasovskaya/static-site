// Setup dotenv package and load environment variables from .env file.
require('dotenv').config();

const path = require('path');

const htmlmin = require('html-minifier');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const { cache } = require('eleventy-plugin-workbox');
const { icons } = require('eleventy-plugin-pwa-icons');
const { styles } = require('eleventy-plugin-styles');
const { scripts } = require('eleventy-plugin-scripts');
const { compress } = require('eleventy-plugin-compress');
const { createImageShortcode } = require('eleventy-shortcode-image');

const {processUrl} = require('./.eleventy/transforms/styles');
// const compileScripts = require('./.eleventy/transforms/scripts');
const {
  FAVICON_FILE,
  MANIFEST_FILE,
  DATA_DIRECTORY,
  FONTS_DIRECTORY,
  AUDIO_DIRECTORY,
  VIDEO_DIRECTORY,
  BUILD_DIRECTORY,
  ASSETS_DIRECTORY,
  IMAGES_DIRECTORY,
  STYLES_DIRECTORY,
  SOURCE_DIRECTORY,
  SCRIPTS_DIRECTORY,
  LAYOUTS_DIRECTORY,
  FAVICONS_DIRECTORY,
  COMPONENTS_DIRECTORY,
} = require('./.eleventy/constants');

module.exports = (config) => {
  config.addShortcode(
    'image',
    createImageShortcode({
      inputDirectory: path.join(
        SOURCE_DIRECTORY,
        ASSETS_DIRECTORY,
        IMAGES_DIRECTORY,
      ),
      outputDirectory: path.join(BUILD_DIRECTORY, IMAGES_DIRECTORY),
    }),
  );

  config.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.HOST,
    },
  });
  // Add generating service worker based on generated by Eleventy HTML files.
  config.addPlugin(cache, { buildDirectory: BUILD_DIRECTORY });
  config.addPlugin(icons, {
    manifest: {
      pathToManifest: path.join(SOURCE_DIRECTORY, MANIFEST_FILE),
      outputDirectory: BUILD_DIRECTORY,
    },
    icons: {
      pathToRawImage: path.join(
        SOURCE_DIRECTORY,
        ASSETS_DIRECTORY,
        IMAGES_DIRECTORY,
        FAVICON_FILE,
      ),
      outputDirectory: path.join(
        BUILD_DIRECTORY,
        IMAGES_DIRECTORY,
        FAVICONS_DIRECTORY,
      ),
    },
  });

  // Process styles that are used in HTML.
  // config.addTransform('styles', async (content, outputPath) => {
  //   if (outputPath.endsWith('html')) {
  //     return compileStyles(content);
  //   }

  //   return content;
  // });

  config.addPlugin(styles, {
    publicDirectory: 'styles',
  });

  config.addPlugin(scripts, {
    publicDirectory: 'scripts'
  });

  // Process scripts that are used in HMTL.
  // config.addTransform('scripts', async (content, outputPath) => {
  //   if (outputPath.endsWith('html')) {
  //     return compileScripts(content);
  //   }

  //   return content;
  // });

  // Minify HTML.
  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  config.addPlugin(compress);

  // Warning: do not set any transform function after this!!!

  config.setWatchThrottleWaitTime(500);

  config.addPassthroughCopy({
    [path.join(
      SOURCE_DIRECTORY,
      ASSETS_DIRECTORY,
      FONTS_DIRECTORY,
    )]: FONTS_DIRECTORY,
  });
  config.addPassthroughCopy({
    [path.join(
      SOURCE_DIRECTORY,
      ASSETS_DIRECTORY,
      VIDEO_DIRECTORY,
    )]: VIDEO_DIRECTORY,
  });
  config.addPassthroughCopy({
    [path.join(
      SOURCE_DIRECTORY,
      ASSETS_DIRECTORY,
      AUDIO_DIRECTORY,
    )]: AUDIO_DIRECTORY,
  });
  config.addPassthroughCopy(path.join(SOURCE_DIRECTORY, 'robots.txt'));

  // config.addWatchTarget(path.join(SOURCE_DIRECTORY, STYLES_DIRECTORY));
  // config.addWatchTarget(path.join(SOURCE_DIRECTORY, SCRIPTS_DIRECTORY));
  config.addWatchTarget(path.join(SOURCE_DIRECTORY, ASSETS_DIRECTORY));

  return {
    dir: {
      data: DATA_DIRECTORY,
      input: SOURCE_DIRECTORY,
      output: BUILD_DIRECTORY,
      layouts: LAYOUTS_DIRECTORY,
      includes: COMPONENTS_DIRECTORY,
    },
  };
};
