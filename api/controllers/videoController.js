const videoService = require("../services/videoService");
const cloudinary = require("../utils/cloudinary");

exports.insert = async (request, response, next) => {
  try {
    const filePath = request?.file?.path;
    const uploadCloud = await cloudinary.uploader.upload(filePath, {
      resource_type: "video",
      public_id: "motaro-video",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" },
        {
          width: 160,
          height: 100,
          crop: "crop",
          gravity: "south",
          audio_codec: "none",
        },
      ],
      eager_async: true,
    });
    const videoUrl = uploadCloud.secure_url;
    const data = await videoService.insert({
      ...request.body,
      video: videoUrl,
    });
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
    const filePath = request?.file?.path;
    const uploadCloud = await cloudinary.uploader.upload(filePath, {
      resource_type: "video",
      public_id: "motaro-video",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" },
        {
          width: 160,
          height: 100,
          crop: "crop",
          gravity: "south",
          audio_codec: "none",
        },
      ],
      eager_async: true,
    });
    const videoUrl = uploadCloud?.secure_url;
    const data = await videoService.update(request.params.id, {
      ...request.body,
      video: videoUrl,
    });
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await videoService.delete(request.params.id);
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};
