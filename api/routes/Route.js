const users = require("../controllers/userController");
const search = require("../controllers/searchController");
const comment = require("../controllers/commentController");
const recipe = require("../controllers/recipeController.js");
const video = require("../controllers/videoController");
const getData = require("../controllers/urlPagination")
const {
  imageUploadUser,
  imageUploadRecipe,
  imageUploadVideos,
} = require("../middleware/multer");
const { Register, Login, Logout } = require("../controllers/authController");
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");
const {cacheData } = require("../middleware/cacheData")


module.exports = (route) => {
  // authenticate
  route.post("/users",  Register);
  route.post("/login",   Login);
  route.delete("/logout",   Logout);
  route.get("/token",   refreshToken);

  // search for users
  route.get("/motaro/find", search.searchAllUsers);

  // search for url pagination
  route.get("/search", getData.getData );

  //search for admin cacheData
  route.get("/admin/:email",  cacheData, search.searchByUserEmail);
  route.get("/admin/id/:id",  cacheData ,search.searchById);
  route.get("/admin/comment/:id",  cacheData, search.searchCommentById);
  route.get("/admin/recipe/:id", cacheData, search.searchRecipeId);
  route.get("/admin/video/:id", cacheData , search.searchVideoId);

  // profile
  route.post("/profile/insert", verifyToken, imageUploadUser, users.insert);
  route.patch("/profile/:id", imageUploadUser, users.updateImage);
  route.patch("/profile/pwd/:id", imageUploadUser, users.updatePwd);
  route.delete("/profile/:id", verifyToken, users.delete);

  // comment
  route.post("/comment/insert", comment.insert);
  route.get("/comment/get", verifyToken, comment.select);
  route.patch("/comment/:id",  verifyToken,comment.update);
  route.delete("/comment/:id", verifyToken, comment.delete);

  //recipe
  route.post("/recipe/insert", imageUploadRecipe, recipe.insert);
  route.get("/recipe/get", recipe.select);
  route.patch("/recipe/:id", imageUploadRecipe, recipe.update);
  route.delete("/recipe/:id",recipe.delete);

  //video
  route.post("/video/insert", imageUploadVideos, video.insert);
  route.get("/video/get",  video.select);
  route.patch("/video/:id", verifyToken, imageUploadVideos, video.update);
  route.delete("/video/:id", verifyToken, video.delete);
};
