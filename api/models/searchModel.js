const db = require("../utils/db");

exports.searchAllUsers = async () => {
  const row = await db.query(
    `SELECT * FROM users ORDER BY id DESC`
  );
  return row.rows;
};

exports.searchAllRecipe = async (search) => {
  const row = await db.query(`SELECT * FROM recipe   WHERE recipe.title LIKE '%'||$1||'%' OR recipe.inggredients LIKE '%'||$1||'%' ORDER BY date DESC LIMIT $2 OFFSET $3`, [search.search, search.limit, search.offset ]);
  return row.rows;
};

exports.searchUserByEmail = async (email) => {
  const row = await db.query(`SELECT * FROM users WHERE email =$1`, [email]);
  return row.rows;
};

exports.searchById = async (id) => {
  const row = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return row.rows;
};

exports.searchComentID = async (id) => {
  const row = await db.query("SELECT comment.*, comment.id as id, users.name, users.image FROM comment LEFT JOIN users ON comment.user_id = users.id WHERE recipe_id = $1", [id]);
  return row.rows;
};

exports.searchRecipeId = async (id) => {
  const row = await db.query("SELECT * FROM recipe WHERE recipe_id = $1", [id]);
  return row.rows;
};

exports.searchVideoId = async (idRecipe) => {
  const row = await db.query("SELECT * FROM sub_video WHERE recipe_id = $1", [
    idRecipe,
  ]);
 
  return row.rows;
};

exports.searchToken = async (refresh_token) => {
  const row = await db.query(`SELECT * FROM users WHERE refresh_token =$1`, [
    refresh_token,
  ]);
  return row.rows;
};
