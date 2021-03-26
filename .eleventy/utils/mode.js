/**
 * Check if current build is supposed to be for production.
 */
module.exports = () => process.env.NODE_ENV === 'production';
