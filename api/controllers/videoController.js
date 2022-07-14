const videoService = require('../services/videoService');

exports.insert = async (request, response, next) => {
  try {
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\video\\", "http://localhost:5500/Backend/asset/video/");
  
      const data = await videoService.insert({...request.body, video: converPath});
      response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
    try {
        
        const data = await videoService.select();
        response.json({ data });
    } catch (error) {
      next(error);
    }
};


exports.update = async (request, response, next) => {
  try {
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\video\\", "http://localhost:5500/Backend/asset/video/");
  
    const data = await videoService.update(request.params.id,{...request.body, video: converPath});
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await videoService.delete(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};