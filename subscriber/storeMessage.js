const monotonicTimestamp = require('monotonic-timestamp');

const levelDb = require('../levelDb');

module.exports = message => {
  const content = JSON.stringify(message);
  return levelDb.put(monotonicTimestamp(), content);
};
