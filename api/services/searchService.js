const searchModel = require('../models/searchModel');
const motaroValidator = require('../validators/motaroValidator');


exports.searchAllUsers = async () => {
    const posts = await searchModel.searchAllUsers();
    return posts;
  };

  exports.searchAllRecipe = async (search) => {
    const posts = await searchModel.searchAllRecipe(search);
    return posts;
  };

exports.searchUsersByEmail = async (email) => {
    const posts = await searchModel.searchUserByEmail(email);
    return posts;
  };

exports.searchById = async (id) => {
    const post = await searchModel.searchById(id);
    return post;
  };
  
  exports.searchCommentId = async (id) => {
    const post = await searchModel.searchComentID(id);
    return post;
  };

  exports.searchRecipeId = async (id) => {
    const post = await searchModel.searchRecipeId(id);
    return post;
  };

  exports.searchVideoId = async (idRecipe) => {
    const post = await searchModel.searchVideoId(idRecipe);
    return post;
  };
  

exports.searchToken = async (refresh_token) => {
    const posts = await searchModel.searchToken(refresh_token);
    return posts;
  };
