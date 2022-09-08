const { request } = require("express");
const db = require("../utils/db");

exports.insert = async (data) => {
  const row = await db.query(
    `INSERT INTO users(name, image, email, phonenumber, password) VALUES ($1, $2, $3, $4, $5)`,
    [
      data.name,
      data.image,
      data.email,
      data.phonenumber,
      data.password,
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.register = async (data) => {
  const row = await db.query(
    `INSERT INTO users(name, email, phonenumber, password, refresh_token) VALUES ($1, $2, $3, $4, $5)`,
    [
      data.name,
      data.email,
      data.phonenumber,
      data.password,
      data.refresh_token
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.update = async (id, data) => {
  const row = await db.query(
    `UPDATE users SET image =$1 WHERE id = $2`,
    [
      data.image,
      id,
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.updatePwd = async(id, data) =>{
  const row = await db.query(`UPDATE users SET password = $1 WHERE id = $2`,[data.password, id])
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
}


exports.updateToken = async (id, data) => {
  const row = await db.query(
    `UPDATE users SET refresh_token=$1 WHERE id =$2`,
    [
      data.refresh_token,
      id.id
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.delete = async (id) => {
  const row = await db.query("DELETE FROM users WHERE id = $1", [id]);
  if (row.affectedRows === 0) {
    return null;
  }
  return { id };
};
