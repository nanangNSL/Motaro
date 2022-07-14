const usersService = require("../services/userService");
const bcrypt = require("bcrypt");

exports.insert = async (request, response, next) => {
  try {
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\image-user\\", "http://localhost:5500/Backend/asset/image-user/");
  
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);

    const data = await usersService.insert({
      ...request.body,
      image: converPath,
      password: `${hash}`,
    });
    response.json({ data });
  } catch (error) {
    next(error);
  }
};




exports.update = async (request, response, next) => {
  try {
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);
    let doy = request.file.path;
    const converPath = doy.replace("C:\\Users\\nanan\\BOOTCAMP\\Motaro\\Backend\\asset\\image-user\\", "http://localhost:5500/Backend/asset/image-user/");
  
    const data = await usersService.update(request.params.id,{
      ...request.body,
      image: converPath,
      password: `${hash}`,
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
    const data = await usersService.delete(request.params.id);
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};
