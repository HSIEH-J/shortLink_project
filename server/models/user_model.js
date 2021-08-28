const bcrypt = require("bcrypt");
const salt = parseInt(process.env.BCRYPT_SALT);
const { pool } = require("./mysql");

const signUp = async (email, password) => {
  const conn = await pool.getConnection();
  try {
    await conn.query("START TRANSACTION");
    const emails = await conn.query("SELECT email FROM user WHERE email = ?", email);
    if (emails[0].length > 0) {
      await conn.query("COMMIT");
      return { error: "Email Already Exists" };
    }
    const user = {
      email: email,
      password: bcrypt.hashSync(password, salt)
    };
    const insert = "INSERT INTO user SET ?";
    const result = await conn.query(insert, user);
    user.id = result[0].insertId;
    await conn.query("COMMIT");
    return { user };
  } catch (error) {
    console.log(error);
    await conn.query("ROLLBACK");
    return { error };
  } finally {
    await conn.release();
  }
};

const signIn = async (email, password) => {
  const conn = await pool.getConnection();
  try {
    await conn.query("START TRANSACTION");
    const users = await conn.query("SELECT * FROM user WHERE email = ?", [email]);
    if (users[0].length === 0) {
      return { error: "Account Is Not Exist." };
    }
    const user = users[0][0];
    if (!bcrypt.compareSync(password, user.password)) {
      await conn.query("COMMIT");
      return { error: "Password Is Wrong" };
    }
    await conn.query("COMMIT");
    return { user };
  } catch (error) {
    console.log(error);
    await conn.query("ROLLBACK");
    return { error };
  } finally {
    await conn.release();
  }
};

const getUserDetail = async (id) => {
  const user = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
  return user;
};

module.exports = { signUp, signIn, getUserDetail };
