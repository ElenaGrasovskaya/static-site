const path = require('path');

const { generateSW } = require('workbox-build');

const isProduction = require('../utils/mode');
const { done, oops } = require('../utils/pretty');
const { FONT_FORMATS, IMAGE_FORMATS } = require('../utils/formats');

const PLUGIN_NAME = 'Workbox';

/** List of extensions that must be cached by service worker. */
const EXTENSIONS = [
  // Can be changed often.
  'html',
  'css',
  'js',
  'mjs',
  'json',
]
  // Changes not so often.
  .concat(FONT_FORMATS, IMAGE_FORMATS);

const ONE_MEGABYTE_IN_BYTES = 1048576;

/**
 * Convert bytes to megabytes.
 *
 * @param {number} bytes
 */
const toMegabytes = (bytes) => (bytes / ONE_MEGABYTE_IN_BYTES).toFixed(2);

/**
 * Build script for service worker registration
 * that will be injected into HTML.
 *
 * @param {string} publicUrl of service worker.
 * By convention, it should be in the site's root.
 */
const buildSWScriptRegistration = (
  publicUrl,
) => /* html */ `<!-- Register service worker for PWA offline mode support. -->
      <script>
        if ("serviceWorker" in window.navigator) {
          window.addEventListener("load", () =>
            window.navigator.serviceWorker.register("${publicUrl}"),
          );
        }
      </script>`;

/**
 * @typedef {Object} EleventyPluginWorkboxOptions
 *
 * @property {import('workbox-build').GenerateSWConfig} [generateSWOptions] - options that will
 * be passed to [`generateSW` function](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW).
 * @property {string} [serviceWorkerLocation] - tells where relative to build directory
 * service worker's file must be placed. By default, it's
 * destination is build directory's root.
 * @property {string} [buildDirectory] - specifies Eleventy's build
 * directory. By default, it is `_site`.
 * @property {boolean} [enabled] - tells if plugin should generate service worker.
 * Useful for situations when there is a need to test work of service worker,
 * especially in development process.
 */

/**
 * Generate service worker for caching project's files.
 * In build directory will be generated one file for this.
 * Script for registering generated service worker will be
 * automatically included into HTML.
 *
 * Do not edit this file directly - instead you can pass
 * needed options in `.eleventy.js` file.
 *
 * Note that if you set listeners to `afterBuild` event
 * in your Eleventy build pipeline, then this plugin should
 * be the last one.
 *
 * @param {Object} config - eleventyConfig object.
 * @param {EleventyPluginWorkboxOptions} [options] - options to configure plugin's behavior.
 */
module.exports = (
  config,
  {
    enabled = isProduction(),
    buildDirectory = '_site',
    generateSWOptions = {},
    serviceWorkerLocation = '',
  } = {},
) => {
  if (enabled) {
    const serviceWorkerPublicUrl = path.join(
      serviceWorkerLocation,
      'service-worker.js',
    );

    config.addTransform('service-worker', (content, outputPath) => {
      if (outputPath.endsWith('html')) {
        const htmlWithServiceWorker = content.replace(
          '</head>',
          buildSWScriptRegistration(serviceWorkerPublicUrl) + '</head>',
        );

        done(
          PLUGIN_NAME,
          'Service worker registration script is injected into HTML',
        );

        return htmlWithServiceWorker;
      }

      return content;
    });

    config.on('afterBuild', () => {
      generateSW({
        swDest: path.join(buildDirectory, serviceWorkerPublicUrl),
        sourcemap: !isProduction(),
        skipWaiting: true,
        globPatterns: [`**/*.{${EXTENSIONS}}`],
        clientsClaim: true,
        globDirectory: buildDirectory,
        inlineWorkboxRuntime: true,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            urlPattern: /.+\.(js|mjs|css|html)$/,
          },
          {
            handler: 'StaleWhileRevalidate',
            urlPattern: new RegExp(
              `.+\\.(${EXTENSIONS.filter((extension) => extension !== 'html')
                .filter((extension) => extension !== 'css')
                .filter((extension) => extension !== 'js')
                .filter((extension) => extension !== 'mjs')}})$`,
            ),
          },
        ],
        ...generateSWOptions,
      }).then(
        ({ size, count }) =>
          done(
            PLUGIN_NAME,
            `${count} files will be precached, totaling ${toMegabytes(size)} MB.`,
          ),
        (error) => oops(PLUGIN_NAME, error),
      );
    });
  }
};
