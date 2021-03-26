const fs = require('fs');
const path = require('path');

const sass = require('sass');
const cssnano = require('cssnano');
const postcss = require('postcss');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNormalize = require('postcss-normalize');
const { PurgeCSS } = require('purgecss');

const rip = require('../utils/rip');
const read = require('../utils/read');
const write = require('../utils/write');
const brotli = require('../utils/brotli');
const toPublicUrl = require('../utils/to_public_url');
const isProduction = require('../utils/mode');
const optimizeImage = require('../utils/image');
const makeDirectories = require('../utils/mkdir');
const linkInputWithOutput = require('../utils/link_input_output');
const { isFont, isImage } = require('../utils/formats');
const { done, oops, start } = require('../utils/pretty');
const { STYLESHEET_LINK_REGEXP } = require('../regexps');
const { reachFromSource, reachFromBuild } = require('../utils/reach');
const {
  FONTS_DIRECTORY,
  STYLES_DIRECTORY,
  IMAGES_DIRECTORY,
  ASSETS_DIRECTORY,
} = require('../constants');

const PROCESS_NAME = 'Styles';

/**
 * Process all urls (images, fonts) from styles.
 * This process is needed when `url` CSS function is used.
 *
 * @param {string} url
 */
const processUrl = (url) => {
  if (isImage(url)) {
    optimizeImage(url);

    return '/' + toPublicUrl(IMAGES_DIRECTORY, url);
  } else if (isFont(url)) {
    const fontsDirectoryPath = reachFromBuild(FONTS_DIRECTORY, url);

    if (!fs.existsSync(fontsDirectoryPath)) {
      read(ASSETS_DIRECTORY, FONTS_DIRECTORY, url)
        .then(async ({ source, url }) => {
          await makeDirectories(path.dirname(url));
          return source;
        })
        .then((font) => write(font, FONTS_DIRECTORY, url));
    }

    return '/' + toPublicUrl(FONTS_DIRECTORY, url);
  } else {
    return url;
  }
};

/**
 * Compile style content with `sass` module.
 *
 * @param {string} data
 */
const compile = (data) => {
  const { css } = sass.renderSync({
    data,
    // Specify directories for ability for sass to resolve imported styles.
    includePaths: fs
      .readdirSync(reachFromSource(STYLES_DIRECTORY), {
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((directory) => reachFromSource(STYLES_DIRECTORY, directory.name)),
  });

  return css;
};

/**
 * Process compiled CSS in order to normalize it
 * according to current browsers usability.
 *
 * @param {{ css: string, url: string }} options
 */
const normalize = ({ css, url: fromUrl }) => {
  // Useful plugins for PostCSS configuration.
  const plugins = [
    postcssImport(postcssNormalize().postcssImport()),
    autoprefixer,
    postcssUrl({
      url: ({ url }) => processUrl(url),
    }),
  ];

  if (isProduction()) {
    plugins.push(cssnano({ preset: 'default' }));
  }

  return postcss(plugins)
    .process(css, { from: fromUrl, map: !isProduction() })
    .then(({ css }) => css);
};

/**
 * Remove unused selectors from css based on HTML content.
 *
 * @param {string} html
 * @param {string} css
 */
const purge = async (html, css) => {
  return (
    await new PurgeCSS().purge({
      css: [{ raw: css }],
      content: [{ raw: html, extension: 'html' }],
    })
  ).reduce((accumulator, { css }) => accumulator + css, '');
};

/**
 * Write compiled CSS to disk and returns copy of it
 * along with output URL to next compress step.
 *
 * @param {string} css
 * @param {string} inputUrl
 */
const flush = async (css, inputUrl) => {
  return {
    css,
    url: await write(css, STYLES_DIRECTORY, inputUrl),
  };
};

/**
 * Compress CSS using brotli algorithm.
 *
 * @param {{ css: string, url: string }} content
 */
const compress = async ({ css, url: publicUrl }) => {
  await brotli(css, reachFromBuild(publicUrl)).then(({ data, url }) =>
    fs.promises.writeFile(url, data),
  );

  return publicUrl;
};

/**
 * Read style's URL from HTML content,
 * compile files and write to HTML proper paths
 * to compiled and bundled styles.
 *
 * @param {string} html
 */
module.exports = async (html) => {
  start(PROCESS_NAME, 'Search styles in HTML...');

  const linkToStyles = rip(html, STYLESHEET_LINK_REGEXP);

  return Promise.all(
    linkToStyles.map(async (inputUrl) =>
      Promise.resolve(
        start(
          PROCESS_NAME,
          `Start compiling "${reachFromSource(STYLES_DIRECTORY, inputUrl)}"`,
        ),
      )
        .then(() => read(STYLES_DIRECTORY, inputUrl))
        .then(({ url, source }) => ({ css: compile(source), url }))
        .then(normalize)
        .then((css) => purge(html, css))
        .then((css) => flush(css, inputUrl))
        .then(compress)
        .then((url) => {
          done(PROCESS_NAME, `Compiled CSS was written to "${reachFromBuild(url)}"`);
          return url;
        })
        .then(
          (outputUrl) => linkInputWithOutput(inputUrl, outputUrl),
          (error) => oops(PROCESS_NAME, error),
        ),
    ),
  ).then(
    (links) => {
      const htmlWithStyles = links.reduce(
        (text, { input, output }) => text.replace(input, output),
        html,
      );
      done(PROCESS_NAME, 'Public URLs of compiled styles were injected into HTML');
      return htmlWithStyles;
    },
    (error) => oops(PROCESS_NAME, error),
  );
};
