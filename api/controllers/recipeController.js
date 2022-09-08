const recipeService = require('../services/recipeServices');
const cloudinary = require("../utils/cloudinary");

exports.insert = async (request, response, next) => {

  try {
    const filePath = request?.file?.path;
      const uploadCloud = await cloudinary.uploader.upload(filePath, {
        folder: 'motaro-image'
      })
      const  imageRecipe = uploadCloud.secure_url
    const data = await recipeService.insert({...request.body, image: imageRecipe});
      response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
    try {
        const data = await recipeService.select();
        response.json({ data });
    } catch (error) {
      next(error);
    }
};


exports.update = async (request, response, next) => {
  try {
    const filePath = request?.file?.path;
    const uploadCloud = await cloudinary.uploader.upload(filePath, {
      folder: 'motaro-image'
    })
    const  imageRecipe = uploadCloud.secure_url
    const data = await recipeService.update(request.params.id, {...request.body, image: imageRecipe});
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await recipeService.delete(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};