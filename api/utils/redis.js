const redis = require("redis");
require('dotenv').config()


let redisClient;
(async () => {
   redisClient = redis.createClient({
    host: process?.env?.REDIS_HOSTNAME,
    port: process?.env?.REDIS_PORT,
    AUTH: process?.env?.REDIS_AUTH
});

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

module.exports = redisClient;