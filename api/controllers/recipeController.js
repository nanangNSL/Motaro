const recipeService = require('../services/recipeServices');

exports.insert = async (request, response, next) => {
  try {
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\image-recipe\\", "http://localhost:5500/Backend/asset/image-recipe/");
  
      const data = await recipeService.insert({...request.body, image: converPath});
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
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\image-recipe\\", "http://localhost:5500/Backend/asset/image-recipe/");
  
    const data = await recipeService.update(request.params.id, {...request.body, image: converPath});
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