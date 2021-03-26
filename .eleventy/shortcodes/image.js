const Image = require('@11ty/eleventy-img');

const optimizeImage = require('../utils/image');

/**
 * @typedef {{
 *  alt?: string, // Alternative text for image
 *  title?: string, // Title for image
 *  classes?: string | ReadonlyArray<string>, // Classes to be inserted into class attribute
 * }} ImageShortCodeOptions - defines optinons for generated <img> tag.
 */

/**
 * Get image URL to be inserted in HTML by Eleventy.
 *
 * @param {string} src - path to image relative to `src/assets/images` directory.
 * @param {ImageShortCodeOptions} [options]
 */
module.exports = async (src, { alt = '', title = '', classes = [] } = {}) => {
  const classNames = Array.isArray(classes) ? classes : classes;

  const { metadata, data, isSVG } = optimizeImage(src, classNames);

  return isSVG
    ? data.then((image) => image.toString('utf8'))
    : Image.generateHTML(
        metadata,
        {
          alt,
          title,
          class: Array.isArray(classes) ? classes.join(' ') : classes,
          // Experimental technology: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading
          loading: 'lazy',
          decoding: 'async',
        },
        {
          // Strip the whitespace from the output of the `<picture>` element.
          whitespaceMode: 'inline',
        },
      );
};
