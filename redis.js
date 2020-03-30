const RedisDb = require('ioredis');

const HOST = process.env.REDIS_HOST || '127.0.0.1';
const PORT = process.env.REDIS_PORT || 6379;

const redis = new RedisDb(PORT, HOST);

redis.on('ready', () => {
  console.log(`Connected to Redis at ${HOST}:${PORT}.`);
});

module.exports = redis;
