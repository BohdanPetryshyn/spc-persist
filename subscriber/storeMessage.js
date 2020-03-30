const monotonicTimestamp = require('monotonic-timestamp');

const redis = require('./redis');

module.exports = message => {
  const content = JSON.stringify(message);
  return redis.set(monotonicTimestamp(), content);
};
