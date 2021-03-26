/**
 * Match stylesheet link and get URL of stylesheet from HTML.
 */
const STYLESHEET_LINK_REGEXP = /<link\s+[^(?:/>)]*href="([^"]+\.(?:css|scss|sass))"[^><]*>/g;
/** Match script link (src) and get URL of script from HTML */
const SCRIPTS_LINK_REGEXP = /<script\s+.*src="([^">(?:<\/)]+\.(js|ts))">\s*<\/script>/g;

module.exports = {
  SCRIPTS_LINK_REGEXP,
  STYLESHEET_LINK_REGEXP,
};
