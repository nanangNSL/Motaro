const usersService = require("../services/userService");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary")

exports.insert = async (request, response, next) => {
  try {
    const filePath = request?.file?.path;
    const uploadCloud = await cloudinary.uploader.upload(filePath, {
      folder: 'motaro-image'
    })
    const  imageRecipe = uploadCloud.secure_url
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);

    const data = await usersService.insert({
      ...request.body,
      image: imageRecipe,
      password: `${hash}`,
    });
    response.json({ data });
  } catch (error) {
    next(error);
  }
};




exports.updateImage = async (request, response, next) => {
  try {

    const filePath = request?.file?.path;
    const uploadCloud = await cloudinary.uploader.upload(filePath, {
      folder: 'motaro-image'
    })
    const  imageRecipe = uploadCloud.secure_url
    const data = await usersService.update(request.params.id,{
      ...request.body,
      image: imageRecipe,
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

exports.updatePwd =async (req, res, next) => {
  const { id} = req.params.id;
  const { password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await usersService.updatePwd(id, {
      ...req.body, password: hashPassword
    })
    res.json({message: "Update password success"})
  } catch (error) {
    next(error)
  }
}

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
