const { validate, schema } = require('../utils/validate');

const Post = schema.object({
  id: schema.number(),
  name: schema.string(),
  image: schema.string(),
  email: schema.string().email(),
  phonenumber: schema.number().max(12),
  password: schema.string(),

  // schema. for comment
  id: schema.number(),
  // user_id: schema.number(),
  comment: schema.string(),

  // schema. for recipe
  recipe_id: schema.string(),
  title: schema.string().max(30) ,
  image: schema.string(),
  inggredients: schema.string(),
  date: schema.string(),

  // schema. for video
  user_id: schema.number(),
  title_video: schema.string(),
  video: schema.string(),
});

module.exports = (data, require) => validate(Post, data, require);