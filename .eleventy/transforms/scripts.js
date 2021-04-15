const path = require('path');

const esbuild = require('esbuild');

const rip = require('../utils/rip');
const toPublicUrl = require('../utils/to_public_url');
const isProduction = require('../utils/mode');
const makeDirectories = require('../utils/mkdir');
const linkInputWithOutput = require('../utils/link_input_output');
const { done, oops, start } = require('../utils/pretty');
const { SCRIPTS_DIRECTORY } = require('../constants');
const { SCRIPTS_LINK_REGEXP } = require('../regexps');
const { reachFromBuild, reachFromSource } = require('../utils/reach');

const PROCESS_NAME = 'Scripts';

/**
 * Compile, bundle and minify script.
 *
 * @param {string} scriptPath
 */
const bundle = async (scriptPath) => {
  const publicUrl = toPublicUrl(SCRIPTS_DIRECTORY, scriptPath);

  const outputFilePath = reachFromBuild(publicUrl);

  await makeDirectories(path.dirname(outputFilePath));
  await esbuild.build({
    bundle: true,
    target: 'es2017',
    minify: isProduction(),
    outfile: outputFilePath,
    sourcemap: !isProduction(),
    entryPoints: [reachFromSource(publicUrl)],
  });

  return publicUrl;
};

/**
 * Read script's URL from HTML content,
 * compile files and write to HTML proper paths
 * to compiled and bundled scripts.
 */
module.exports = async (content) => {
  start(PROCESS_NAME, 'Search scripts in HTML...');

  const linkToScripts = rip(content, SCRIPTS_LINK_REGEXP);

  return Promise.all(
    linkToScripts.map(async (inputUrl) =>
      Promise.resolve(
        start(
          PROCESS_NAME,
          `Start bundling "${reachFromSource(SCRIPTS_DIRECTORY, inputUrl)}"`,
        ),
      )
        .then(() => bundle(inputUrl))
        .then((url) => {
          done(
            PROCESS_NAME,
            `Bundled script was written to "${reachFromBuild(url)}"`,
          );
          return url;
        })
        .then(
          (outputUrl) => linkInputWithOutput(inputUrl, outputUrl),
          (error) => oops(PROCESS_NAME, error),
        ),
    ),
  ).then(
    (links) => {
      const htmlWithScripts = links.reduce(
        (text, { input, output }) => text.replace(input, output),
        content,
      );
      done(PROCESS_NAME, 'Public URLs of bundled scripts were injected into HTML');
      return htmlWithScripts;
    },
    (error) => oops(PROCESS_NAME, error),
  );
};
