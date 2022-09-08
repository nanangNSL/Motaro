const db = require('../utils/db');

exports.insert = async (data) => {
  let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`INSERT INTO recipe(title, image, inggredients,  date, user_id ) VALUES ($1, $2, $3, $4,$5)`, [ data.title, data.image, data.inggredients, date, data.user_id ]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM recipe`);
    return row.rows;
};



exports.update = async (id, data) => {
  let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`UPDATE recipe SET  title =$1, image =$2, inggredients =$3, date = $4 WHERE recipe_id =$5`, [data.title, data.image, data.inggredients,  date, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM recipe WHERE recipe_id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};