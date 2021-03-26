/** Gets date object of current moment. */
const today = () => new Date();

/** Gets current time in `H:m:s` format. */
const time = () =>
  today().getHours() + ':' + today().getMinutes() + ':' + today().getSeconds();

module.exports = {
  time,
  today,
};
