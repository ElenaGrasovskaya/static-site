const chalk = require('chalk');

const { time } = require('./date');

/**
 * Convert Error to string.
 *
 * @param {Error} error
 */
const errorToString = (error) =>
  error.name + ': ' + error.message + '\n' + error.stack;

/**
 * Log _message_ binded with _name_ of the process
 * to teminal.
 *
 * @param {chalk.Chalk} color - function that paint _message_.
 * @param {string} name of the process.
 * @param {string} message
 * @param {string} emoji - just for fun :)
 */
const log = (color, name, message, emoji) =>
  console.info(
    ' ' +
      chalk.bgYellowBright(time()) +
      ' -> ' +
      chalk.bold.gray(name) +
      ': ' +
      color(message) +
      ' ' +
      emoji,
  );

/**
 * Alert about starting of process.
 *
 * @param {string} name of the process that starts execution.
 * @param {string} message
 */
const start = (name, message) => log(chalk.green, name, message, '🆙');

/**
 * Alert about successful ending of process.
 *
 * @param {string} name of the process that ends execution.
 * @param {string} message
 */
const done = (name, message) => log(chalk.magenta, name, message, '🙌');

/**
 * Alert about error that was occured during process execution.
 *
 * @param {string} name of the proess that finishes with error.
 * @param {string | Error} message
 */
const oops = (name, message) =>
  log(
    (messageOrError) =>
      chalk.red(
        typeof messageOrError === 'string'
          ? messageOrError
          : errorToString(messageOrError),
      ),
    name,
    message,
    '💥',
  );

module.exports = {
  done,
  oops,
  start,
};
