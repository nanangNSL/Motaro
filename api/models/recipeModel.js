const db = require('../utils/db');

exports.insert = async (data) => {
  let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`INSERT INTO recipe(title, image, inggredients, video, date ) VALUES ($1, $2, $3, $4, $5)`, [ data.title, data.image, data.inggredients, data.video, date]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM recipe`);
    return row.rows;
};



exports.update = async (id, data) => {
  let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`UPDATE recipe SET  title =$1, image =$2, inggredients =$3, video =$4, date = $5 WHERE recipe_id =$6`, [data.title, data.image, data.inggredients, data.video, date, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM recipe WHERE recipe_id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};