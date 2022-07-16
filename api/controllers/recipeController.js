const recipeService = require('../services/recipeServices');

exports.insert = async (request, response, next) => {
  try {
    const fileName = request.file.filename;
    const url = `${request.protocol}://${request.get('host')}/public/${fileName}`;
    const data = await recipeService.insert({...request.body, image: url});
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
 
    const fileName = request.file.filename;
    const url = `${request.protocol}://${request.get('host')}/public/${fileName}`;
    const data = await recipeService.update(request.params.id, {...request.body, image: url});
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