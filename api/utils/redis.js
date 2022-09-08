const redis = require("redis");
require('dotenv').config()


let redisClient;
(async () => {
  if(process.env.MODE_ENV === "production") {
     redisClient = redis.createClient({
    url: process.env.REDIS_URL,
  });
  }else{
    redisClient = redis.createClient();
  }
  

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

module.exports = redisClient;