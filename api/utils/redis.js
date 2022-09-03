const redis = require("redis");
require('dotenv').config()


let redisClient;
(async () => {
    if(process.env.MODE_ENV === "production"){
        redisClient = redis.createClient({
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})
    }else{
        redisClient = redis.createClient();
    }
   

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

module.exports = redisClient;