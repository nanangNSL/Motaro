const usersService = require("../services/userService");
const bcrypt = require("bcrypt");

exports.insert = async (request, response, next) => {
  try {
    const fileName = request.file.filename;
    const url = `${request.protocol}://${request.get('host')}/public/${fileName}`;
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);

    const data = await usersService.insert({
      ...request.body,
      image: url,
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
    const fileName = request.file.filename;
    const url = `${request.protocol}://${request.get('host')}/public/${fileName}`;
    const data = await usersService.update(request.params.id,{
      ...request.body,
      image: url,
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
