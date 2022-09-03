const redis = require("redis");
require('dotenv').config()


let redisClient;
(async () => {
   redisClient = redis.createClient({
    url: process.env.REDIS_URL,
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

module.exports = redisClient;