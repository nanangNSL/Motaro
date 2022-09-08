const redisClient = require("../utils/redis");

exports.cacheData = async (req, res, next) => {
  let species;
  let keyCache;

  if (req.params.id) {
    species = req.params.id;
    switch (req.route.path) {
      case "/admin/video/:id":
        keyCache = species + "video";
        break;
      case "/admin/comment/:id":
        keyCache = species + "comment";
        break;
      case "/admin/recipe/:id":
        keyCache = species + "recipe";
        break;

      case "/admin/id/:id":
        keyCache = species + "users";
        break;

      default:
        break;
    }
  } else {
    species = req.params.email;
    switch (req.route.path) {
      case "/admin/:email":
        keyCache = species + "email";
        break;

      default:
        break;
    }
  }

  let results;
  try {
    const cacheResults = await redisClient.get(keyCache);
    if (cacheResults) {
      results = JSON.parse(cacheResults);
      res.send({
        fromCache: true,
        data: results,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
};
