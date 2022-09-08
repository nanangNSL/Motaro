const searchService = require("../services/searchService");
const redisClient = require('../utils/redis')
const { v4: uuidv4 } = require('uuid');

exports.searchAllUsers = async (request, response, next) => {
  try {
    const data = await searchService.searchAllUsers();
    response.json({
      data: data,
      jumlahData: data.length,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchByUserEmail = async (request, response, next) => {
  const dataQuery = request.params.email;
  let data;
  try {
    data = await searchService.searchUsersByEmail(dataQuery);
    if (data.length === 0) {
      throw "API returned an empty array";
    }

    await redisClient.set(dataQuery+'email', JSON.stringify(data), {
      EX: 180,
      NX: true,
    });
    response.send({
      fromCache: false,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchById = async (request, response, next) => {
  const dataQuery = request.params.id;
  let dataResult;
  try {
    dataResult = await searchService.searchById(dataQuery);
    if (dataResult.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(dataQuery+'users', JSON.stringify(dataResult), {
      EX: 180,
      NX: true,
    });
    response.send({
      fromCache: false,
      data: dataResult,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchCommentById = async (request, response, next) => {
  const dataQuery = request.params.id;
  let dataComment;
  try {
    dataComment = await searchService.searchCommentId(dataQuery);
    if (dataComment.length === 0) {
      throw "API returned an empty array";
    }
   await redisClient.set(dataQuery+'comment', JSON.stringify(dataComment), {
      EX: 180,
      NX: true,
    });
    response.send({
      fromCache: false,
      data: dataComment,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchRecipeId = async (request, response, next) => {
  const dataQuery = request.params.id;
  let dataRecipe;
  try {
    dataRecipe = await searchService.searchRecipeId(dataQuery);
    if (dataRecipe.length === 0) {
      throw "API returned an empty array";
    }

    await redisClient.set(dataQuery+'recipe', JSON.stringify(dataRecipe), {
      EX: 180,
      NX: true,
    });
    response.send({
      fromCache: false,
      data: dataRecipe,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchVideoId = async (request, response, next) => {
  const dataQuery = request.params.id;
  let dataVideo;
  try {
    dataVideo = await searchService.searchVideoId(dataQuery);
   if (dataVideo.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(dataQuery+"video", JSON.stringify(dataVideo), {
      EX: 180,
      NX: true,
    });
    response.send({
      fromCache: false,
      data: dataVideo,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
