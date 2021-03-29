// This file supposed to be aggregator for all constants that are used in Eleventy's config file.

/** Directory for global data for Eleventy's templates. */
const DATA_DIRECTORY = 'data';
/** Directory for all compiled files. */
const BUILD_DIRECTORY = 'build';
/** Directory for video files. */
const VIDEO_DIRECTORY = 'video';
/** Directory for fonts. */
const FONTS_DIRECTORY = 'fonts';
/**
 * Directory for `.11ty.js` files.
 * By convention these one are used for compilation to HTML by
 * Eleventy.
 */
const PAGES_DIRECTORY = 'pages';
/** Directory for audio files. */
const AUDIO_DIRECTORY = 'audio';
/**
 * Directory where all assets should live.
 * This is parent directory for fonts, images, video and audio files.
 */
const ASSETS_DIRECTORY = 'assets';
/** Input directory for Eleventy. This is place where all source code lives. */
const SOURCE_DIRECTORY = 'src';
/** Directory for all images. */
const IMAGES_DIRECTORY = 'images';
/**
 * Directory for styles.
 * Root files in this directory must corresponds to
 * files in `pages`.
 */
const STYLES_DIRECTORY = 'styles';
/** Directory for layouts. */
const LAYOUTS_DIRECTORY = 'layouts';
/**
 * Directory for scripts.
 * Every root file must corresponds to its own
 * page (Eleventy template).
 */
const SCRIPTS_DIRECTORY = 'scripts';
/**
 * Directory for favicons.
 * Favicons are generated by `pwa-assets-generator`.
 */
const FAVICONS_DIRECTORY = 'favicons';
/**
 * Directory for components.
 * For JavaScript templates must be imported manually to
 * places where are they used.
 */
const COMPONENTS_DIRECTORY = 'components'; // aka includes in Eleventy.

/** Name of manifest file. */
const MANIFEST_FILE = 'manifest.json';

/** Name of favicon file. */
const FAVICON_FILE = 'favicon.png';

/**
 * Closing part of <head> tag.
 * @internal
 */
const HEAD_CLOSED_TAG = '</head>';

module.exports = {
  FAVICON_FILE,
  MANIFEST_FILE,
  DATA_DIRECTORY,
  HEAD_CLOSED_TAG,
  AUDIO_DIRECTORY,
  FONTS_DIRECTORY,
  BUILD_DIRECTORY,
  PAGES_DIRECTORY,
  VIDEO_DIRECTORY,
  ASSETS_DIRECTORY,
  SOURCE_DIRECTORY,
  IMAGES_DIRECTORY,
  STYLES_DIRECTORY,
  SCRIPTS_DIRECTORY,
  LAYOUTS_DIRECTORY,
  FAVICONS_DIRECTORY,
  COMPONENTS_DIRECTORY,
};